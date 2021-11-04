import React from 'react'
import {Route, Switch } from "react-router";

import Home from '../Components/Homepage/Home';
import MensMainPage from '../Components/MenPage/MensMainPage';
import WishlistMainPage from "../Components/WishlistPage/WishlistMainPage";
import { TShirtMainPage } from "../Components/T-Shirt/TshirtMainPage";
import BagMainPage from "../Components/BagPage/BagMainPage";
import UserProfilePage from "./../Components/UserProfilePage/UserProfilePage";

import Login from "../Components/Login/Login";
import Navbar from '../Components/Navbar/Navbar';
import UserDetails from "../Components/Login/UserDetails"
import OrderPlaced from "../Components/BagPage/OrderPlaced.jsx";
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import DisplayMedia from './../Components/DisplayMedia/DisplayMedia';

function Routes() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/men" exact>
            <MensMainPage />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/login/userdetails">
            <UserDetails />
          </Route>
          <Route path="/wishlist" exact>
            <WishlistMainPage />
          </Route>
          <Route path="/result" exact>
            <TShirtMainPage />
          </Route>
          <Route path="/login/userdetails">
            <UserDetails />
          </Route>
          <Route path="/cart">
            <BagMainPage />
          </Route>
          <Route path="/orderplaced">
            <OrderPlaced />
          </Route>
          <Route path="/resultpage/:id">
            <ProductDetails />
          </Route>
          <Route path="/user-profile/:username" exact>
            <UserProfilePage />
          </Route>
          <Route path="/user-profile/:username/:type/:id" exact>
            <DisplayMedia />
          </Route>
        </Switch>
      </div>
    );
}

export default Routes
