import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import icons for password visibility toggle
import Login from "../assets/images/login.png";
import { Link } from "react-router-dom";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false, // State to manage password visibility
      errors: {}, // Object to store form validation errors
    };
  }

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = {};
    if (!this.state.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = "Invalid email address";
    }
    if (!this.state.password) {
      errors.password = "Password is required";
    }
    // If there are errors, set state and return
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    // If no errors, submit form
    // You can add your form submission logic here
  };

  // Function to handle password visibility toggle
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { email, password, showPassword, errors } = this.state;
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm" onSubmit={this.handleSubmit}>
                    <h4 className="section-title-login"> USER SIGN IN </h4>
                    <h6 className="section-sub-title">
                      Please Enter Your Email Address
                    </h6>
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}

                    <div className="input-group m-2">
                      <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={this.togglePasswordVisibility}
                      >
                        {showPassword ? <HiEyeOff /> : <HiEye />}
                      </button>
                    </div>
                    {errors.password && (
                      <span className="text-danger">{errors.password}</span>
                    )}

                    <Link
                      to="hero"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Next
                    </Link>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} alt="Login" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserLogin;
