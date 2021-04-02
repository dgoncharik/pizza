import {Categories, PizzaBlock, SortPopup} from "../Components";
import PropTypes from "prop-types";

function Home({pizzas}) {

  return (
      <div className="container">
        <div className="content__top">
          <Categories items={[
            "Мясные",
            "Вегетарианские",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}/>
          <SortPopup items={[
            {name: "популярности", type: "popular"},
            {name:"цене", type: "price"},
            {name: "алфавиту", type:"alphabet"}
          ]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">

          {
            pizzas?.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
          }

        </div>
      </div>
  )
}

Home.propTypes = {
  pizzas: PropTypes.array

}

Home.defaultProps = {
  pizzas: []
}

export default Home;