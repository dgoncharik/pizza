import {Header} from "./Components";
import {Home, Cart} from "./Pages";
import {Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:3000/db.json")
        .then(response => setPizzas(response.data.pizzas))
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
