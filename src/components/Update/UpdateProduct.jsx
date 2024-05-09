import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";

const UpdateProduct = ({ match, history }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  useEffect(() => {
    const id = match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/product/${id}`)
      .then((response) => {
        console.log("responseeee", response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [match.params.id]);

  useEffect(() => {
    const formData = new FormData();

    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    const id = match.params.id;
    axios
      .patch(`http://127.0.0.1:8000/api/update/${id}`, formData)
      .then((response) => {
        setProduct({
          name: response.data.name || "",
          price: response.data.price || "",
          image: response.data.image || "",
        });
        history.push("/favourite");
      })
      .catch((error) => {
        console.error("Update error:", error);
      });
  }, [match.params.id, product, selectedFile, history]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the form
    submitFormData();
  };

  const submitFormData = () => {
    // The form submission logic is moved to the second useEffect
    // for updating the product data.
  };

  return (
    <Container>
      <div className="section-title text-center mb-55">
        <h2>UPDATE PRODUCT</h2>
        <p>Some Of Our Exclusive Collection, You May Add</p>
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
          <Form.Control type="file" name="image" onChange={handleFileChange} />
        </Form.Group>

        {product.image && (
          <div className="text-center my-3">
            <img
              src={`http://127.0.0.1:8000/storage/${product.file_path}`}
              alt="Product"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        )}

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
            Update Product
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default withRouter(UpdateProduct);
