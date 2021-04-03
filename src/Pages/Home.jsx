import {Categories, PizzaBlock, PizzaLoader, SortPopup} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortByType, toggleSortByOrder} from "../redux/actions/filters";
import {useCallback, useEffect} from "react";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  {name:  "популярности",  type: "rating"},
  {name:  "цене",          type: "price"},
  {name:  "алфавиту",      type: "name"}
];

function Home() {

  const dispatch = useDispatch();

  const {pizzas, isLoaded, category, sortBy} = useSelector(({pizzas, filters}) => {
    return {
      pizzas: pizzas.items,
      isLoaded: pizzas.isLoaded,
      category: filters.category,
      sortBy: filters.sortBy
    }
  });

  useEffect( () => {
   dispatch(fetchPizzas(category, sortBy.type, sortBy.order));
  }, [category, sortBy]);


  const onCategoryClick = useCallback((index) => {
    dispatch(setCategory(index));
  },[])

  const onTypeSortClick = useCallback((sortByType) => {
    dispatch(setSortByType(sortByType))
  },[])

  const onOrderSortClick = useCallback(() => {
    dispatch(toggleSortByOrder());
  },[])

  return (
      <div className="container">
        <div className="content__top">
          <Categories items={categoryNames} activeItem={category} onClickItemCallback={onCategoryClick}/>
          <SortPopup items={sortItems} sortBy={sortBy} onClickTypeSortCallback={onTypeSortClick} onClickOrderSortCallback={onOrderSortClick}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">

          {
            isLoaded ? pizzas?.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />) :
                Array(4).fill(0).map((_, index) => <PizzaLoader key={index}/>)
          }

        </div>
      </div>
  )
}

export default Home;