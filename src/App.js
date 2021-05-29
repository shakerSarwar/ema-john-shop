import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Inventory from './Components/Inventory/Inventory';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Components/Review/Review';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
        <Header />
        <Router>
          <Switch>

            <Route path="/shop">
            <Shop />
            </Route>

            <Route path="/review">
            <Review></Review>
            </Route>

            <Route path="/inventory">
            <Inventory></Inventory>
            </Route>

            <Route exact path="/">
            <Shop />
            </Route>

            <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
            </Route>

            <Route path="*">
            <NotFound></NotFound>
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;