import {Header} from "./Components";
import {Home, Cart} from "./Pages";
import {Route, Switch} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

function App() {

  const dispatch = useDispatch();
  const {pizzas, sortBy}  = useSelector(({pizzas, filters}) => {
    return {
      pizzas: pizzas.items,
      sortBy: filters.sortBy
    }
  });

  useEffect( () => {
    axios.get("http://localhost:3000/db.json")
        .then(response => {
          dispatch(setPizzas(response.data.pizzas))
        });
  }, []);

  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/cart" component={Cart}/>
            <Route path="/" render={() => <Home pizzas={pizzas}/>}/>
          </Switch>
        </div>
      </div>
  );
}




export default App;
