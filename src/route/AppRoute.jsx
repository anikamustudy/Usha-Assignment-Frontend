import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import UpdateProductPage from "../pages/UpdateProductPage";
import ViewProdcutPage from "../pages/ViewProductPage";
import AboutPage from "../pages/AboutPage";
import MainNavbar from "../components/common/MainNavbar";
import HomeSlider from "../components/home/HomeSlider";
import FooterDesktop from "../components/common/FooterDesktop";
import Hero from "../components/common/Hero";
import ProductApp from "../components/common/Product/ProductApp";
import ViewProduct from "../components/ViewProduct/ViewProduct";
import UpdateDeleteProduct from "../components/UpdateDelete/UpdateDeleteProduct";
import AddProduct from "../components/AddProduct/AddProduct";
import EditProduct from "../components/UpdateDelete/EditPage";

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
          <Route exact path="/viewproductpage" component={ViewProdcutPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/login" component={UserLoginPage} />
          <Route exact path="/hero" component={Hero} />
          <Route exact path="/product-app" component={ProductApp} />
          <Route exact path="/viewproduct" component={ViewProduct} />

          <Route exact path="/addproduct" component={AddProduct} />
          <Route exact path="/editproduct/:id" component={EditProduct} />
          <Route
            exact
            path="/updatedeleteproduct/:id"
            component={UpdateDeleteProduct}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
