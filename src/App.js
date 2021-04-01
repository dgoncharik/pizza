import {Header} from "./Components";
import {Home, Cart} from "./Pages";
import {Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

function App({pizzas, setPizzas, filters}) {

  useEffect( () => {
    axios.get("http://localhost:3000/db.json")
        .then(response => setPizzas(response.data.pizzas));
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

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = {
  setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
