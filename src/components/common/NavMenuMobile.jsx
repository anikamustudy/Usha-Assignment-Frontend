import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";

class NavMenuMobile extends Component {
  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
    };
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  };

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  };

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
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
              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/addproduct" className="btn">
                  <i class="fa h4 solid fa-cart-plus"></i>
                </Link>
                <Link to="/updatedeleteproduct/id" className="btn">
                  <i className="fa h4 fa-edit"></i>
                </Link>

                <Link to="/viewproduct" className="btn">
                  <i class="fa h4 solid fa-eye"></i>
                </Link>

                <Link to="/logout" className="h4 btn">
                  Logout
                </Link>
              </Col>
            </Row>
          </Container>

          <div className={this.state.SideNavState}></div>

          <div
            onClick={this.ContentOverlayClickHandler}
            className={this.state.ContentOverState}
          ></div>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;
