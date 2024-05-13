import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FooterDesktop from "../common/FooterDesktop";
import NavMenuDesktop from "../common/NavMenuDesktop";
import FooterMobile from "../common/FooterMobile";
import NavMenuMobile from "../common/NavMenuMobile";

const EditProduct = ({ history, match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState({
    image: null,
    name: "",
    description: "",
    price: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/product/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/update/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProduct(response.data); // Update product state with the response data

      // Pass the updated product data to the view product page
      history.push({
        pathname: "/viewproduct",
        state: { product: response.data },
      });
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <br />
      <Container>
        <div className="section-title text-center mb-55">
          <h2>UPDATE PRODUCT</h2>
          <p>Edit Product Information</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="productDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={product.description}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="productPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="productFilePath">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </Form.Group>

          {product.image && (
            <div className="text-center my-3">
              <img
                src={`http://127.0.0.1:8000/storage/${product.image}`}
                alt="Product"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          )}

          {imagePreviewUrl && (
            <div className="text-center my-10">
              <img
                src={imagePreviewUrl}
                alt="Product"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          )}

          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
              Update Product
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

export default withRouter(EditProduct);
