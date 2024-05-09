import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import UpdateProductPage from "../pages/UpdateProductPage";
import FavouritePage from "../pages/FavouritePage";
import AboutPage from "../pages/AboutPage";
import MainNavbar from "../components/common/MainNavbar";
import HomeSlider from "../components/home/HomeSlider";
import FooterDesktop from "../components/common/FooterDesktop";
import Hero from "../components/common/Hero";
import ImageList from "../components/common/Product/ImageList";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={MainNavbar} />
          <Route exact path="/" component={HomeSlider} />
          <Route exact path="/" component={FooterDesktop} />

          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route path="/updateproduct/:id" component={UpdateProductPage} />
          <Route exact path="/favourite" component={FavouritePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/login" component={UserLoginPage} />
          <Route exact path="/hero" component={Hero} />
          <Route exact path="/image-list" component={ImageList} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
