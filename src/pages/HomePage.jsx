import React, { Component, Fragment } from "react";
// import FeaturedProducts from "../components/home/FeaturedProduct";
import MainMenuMobile from "../components/common/MainMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import AppUrl from "../api/AppUrl";
import axios from "axios";
import MainNavbar from "../components/common/MainNavbar";
import HomeSlider from "../components/home/HomeSlider";

export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails = () => {
    axios.get(AppUrl.VisitorDetails).then().catch();
  };
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <MainNavbar />
        </div>

        <div className="Mobile">
          <MainMenuMobile />
        </div>

        <div>
          <HomeSlider />
        </div>

        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
