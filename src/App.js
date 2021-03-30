import {Header} from "./Components";
import {Home, Cart} from "./Pages";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/cart" component={Cart}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
