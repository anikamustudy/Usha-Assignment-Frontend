import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
// import Bars from "../../assets/images/bars.png";
import { Link, Redirect } from "react-router-dom";
import HomeSlider from "../home/HomeSlider";
import FooterDesktop from "./FooterDesktop";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

class MainNavbar extends Component {
  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      Searchkey: "",
      SearchRedirectStauts: false,
    };
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SeachOnClick = this.SeachOnClick.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
  }

  SearchOnChange(event) {
    let Searchkey = event.target.value;
    // alert(Searchkey);
    this.setState({ Searchkey: Searchkey });
  }

  SeachOnClick() {
    if (this.state.Searchkey.length >= 2) {
      this.setState({ SearchRedirectStauts: true });
    }
  }

  searchRedirect() {
    if (this.state.SearchRedirectStauts === true) {
      return <Redirect to={"/search/" + this.state.Searchkey} />;
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  };

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  };

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    // let ContentOverState = this.state.ContentOverState;
    if (SideNavState === "sideNavOpen") {
      this.setState({
        SideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        SideNavState: "sideNavOpen",
        ContentOverState: "ContentOverlayOpen",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={"top"} className="bg-blue">
            {" "}
            {/* Change bg to "lightblue" */}
            <Container
              fluid={"true"}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/">
                    {" "}
                    <img className="nav-logo" src={Logo} />{" "}
                  </Link>
                </Col>

                <Col
                  className="p-1 mt-1 diplay-flex"
                  style={{ display: "flex", alignItems: "center" }}
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <Link
                    to="/HomeSlider"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <h5>Home</h5>
                    <sup>
                      <span className="badge text-white bg-danger">3</span>
                    </sup>
                  </Link>

                  <Link
                    to="/About"
                    className="btn"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <h5 style={{ margin: 0, marginRight: "0.5rem" }}>About</h5>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>

                  <Link
                    to="/Contact"
                    className="btn"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <h5 style={{ margin: 0, marginRight: "0.5rem" }}>
                      Contact
                    </h5>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <Link to="/login" className="h4 btn">
                    LOGIN
                  </Link>
                </Col>
              </Row>
              {this.searchRedirect()}
            </Container>
          </Navbar>
        </div>

        <div className={this.state.SideNavState}></div>

        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
        <div>
          <HomeSlider />
          <FooterDesktop />
        </div>
      </Fragment>
    );
  }
}

export default MainNavbar;
