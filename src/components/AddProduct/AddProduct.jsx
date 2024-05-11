import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FooterDesktop from "../common/FooterDesktop";
import NavMenuDesktop from "../common/NavMenuDesktop";

const AddProduct = ({ history }) => {
  const [product, setProduct] = useState({
    image: null,
    name: "",
    description: "",
    price: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

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
      // formData.append("image", `${selectedFile}`);
    }
    Object.keys(product).forEach((key) => {
      if (key !== product.image) {
        // }
        formData.append(key, product[key]);
      } // Ensure product state is up-to-date
    });

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/addProduct/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure correct Content-Type
          },
        }
      );

      setProduct({
        name: response.data.name || "",
        description: response.data.description || "",
        price: response.data.price || "",
        image: response.data.image || "",
      });

      const { image, ...updatedProduct } = response.data;
      setProduct(updatedProduct);

      history.push("/addproduct");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <>
      <NavMenuDesktop />
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
      <FooterDesktop />
    </>
  );
};

export default withRouter(AddProduct);

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import axios from "axios";

// // import Swal from "sweetalert2";
// // import { useNavigate } from "react-router-dom";

// const AddProduct = () => {
//   // const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState();
//   const [validationError, setValidationError] = useState({});

//   const createProduct = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("image", image);

//     console.log("Warnnnn", formData);

//     await axios
//       .post("http://localhost:8000/api/product/create", formData)
//       .then(({ data }) => {
//         // Swal.fire({ icon: "success", text: data.message });
//         // navigate("/products");
//       })
//       .catch(({ response }) => {
//         if (response.status === 422) {
//           setValidationError(response.data.errors);
//         }
//       });
//   };

//   const changeHandler = (event) => {
//     setImage(event.target.files[0]);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-12 col-sm-12 col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h4 className="card-title">Create Product</h4>
//               <hr />
//               <div className="form-wrapper">
//                 {Object.keys(validationError).length > 0 && (
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="alert alert-danger">
//                         <ul className="mb-0">
//                           {Object.entries(validationError).map(
//                             ([key, value]) => (
//                               <li key={key}>{value}</li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <Form onSubmit={createProduct}>
//                   <Row>
//                     <Col>
//                       <Form.Group controlId="Name">
//                         <Form.Label>Title</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={title}
//                           onChange={(event) => {
//                             setTitle(event.target.value);
//                           }}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row className="my-3">
//                     <Col>
//                       <Form.Group controlId="Description">
//                         <Form.Label>Description</Form.Label>
//                         <Form.Control
//                           as="textarea"
//                           rows={3}
//                           value={description}
//                           onChange={(event) => {
//                             setDescription(event.target.value);
//                           }}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col>
//                       <Form.Group controlId="Image" className="mb-3">
//                         <Form.Label>Image</Form.Label>
//                         <Form.Control type="file" onChange={changeHandler} />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Button
//                     variant="primary"
//                     className="mt-2"
//                     size="lg"
//                     block="block"
//                     type="submit"
//                   >
//                     Save
//                   </Button>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
