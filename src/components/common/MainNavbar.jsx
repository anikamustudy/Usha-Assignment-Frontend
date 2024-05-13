import React, { useState } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link, Redirect } from "react-router-dom";
import FooterDesktop from "./FooterDesktop";


const MainNavbar = () => {
  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverState, setContentOverState] = useState(
    "ContentOverlayClose"
  );
  const [searchKey, setSearchKey] = useState("");
  const [searchRedirectStatus, setSearchRedirectStatus] = useState(false);


  const searchOnChange = (event) => {
    let searchKey = event.target.value;
    setSearchKey(searchKey);
  };


  const searchOnClick = () => {
    if (searchKey.length >= 2) {
      setSearchRedirectStatus(true);
    }
  };


  const searchRedirect = () => {
    if (searchRedirectStatus) {
      return <Redirect to={"/search/" + searchKey} />;
    }
  };


  const menuBarClickHandler = () => {
    sideNavOpenClose();
  };


  const contentOverlayClickHandler = () => {
    sideNavOpenClose();
  };


  const sideNavOpenClose = () => {
    let newSideNavState =
      sideNavState === "sideNavOpen" ? "sideNavClose" : "sideNavOpen";
    setSideNavState(newSideNavState);
    setContentOverState(
      newSideNavState === "sideNavOpen"
        ? "ContentOverlayOpen"
        : "ContentOverlayClose"
    );
  };


  return (
    <>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="bg-blue">
          <Container
            fluid={true}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/">
                  <img className="nav-logo" src={Logo} alt="Logo" />
                </Link>
              </Col>


              <Col
                className="p-1 mt-1 diplay-flex text-right"
                style={{ display: "flex" }}
                lg={4}
                md={4}
                sm={12}
                xs={12}
              >
                <Link
                  to="/home"
                  className="btn"
                  style={{ display: "flex", alignItems: "left" }}
                >
                  <h5 style={{ margin: 0, marginRight: "0.5rem" }}>Home</h5>
                </Link>


                <Link
                  to="/about"
                  className="btn"
                  style={{ display: "flex", alignItems: "left" }}
                >
                  <h5 style={{ margin: 0, marginRight: "0.5rem" }}>About</h5>
                </Link>


                <Link
                  to="/contact"
                  className="btn"
                  style={{ display: "flex", alignItems: "left" }}
                >
                  <h5 style={{ margin: 0, marginRight: "0.5rem" }}>Contact</h5>
                </Link>
                <Link
                  type="submit"
                  to="/login"
                  className="btn btn-block m-2 site-btn-login w-9 "
                >
                  Login
                </Link>
              </Col>
            </Row>
            {searchRedirect()}
          </Container>
        </Navbar>
      </div>


      <div className={sideNavState}></div>


      <div
        onClick={contentOverlayClickHandler}
        className={contentOverState}
      ></div>
    </>
  );
};


export default MainNavbar;
