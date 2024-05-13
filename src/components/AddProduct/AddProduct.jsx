import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FooterDesktop from "../common/FooterDesktop";
import NavMenuDesktop from "../common/NavMenuDesktop";
import MainMenuMobile from "../common/MainMenuMobile";
import NavMenuMobile from "../common/NavMenuMobile";
import FooterMobile from "../common/FooterMobile";

const AddProduct = ({ history }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState(null);

  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageInput = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    console.warn(formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addProduct/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      history.push("/addproduct");
    } catch (error) {
      console.error("Add product error:", error);
    }
  }; // Add closing curly brace here

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <Container>
        <div className="section-title text-center mb-55">
          <h2>ADD PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Add</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="productDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="productPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="productFilePath">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleImageInput}
            />
          </Form.Group>

          {imagePreviewUrl && (
            <div className="text-center my-3">
              <img
                src={imagePreviewUrl}
                alt="Product"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          )}

          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </div>
        </Form>
      </Container>
      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default withRouter(AddProduct); // Moved withRouter to the export statement
