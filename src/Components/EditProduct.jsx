import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { getProductAsync, updateProductAsync } from "../Services/Actions/productAction";
import { uploadImage } from "../Services/imageUpload";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, isUpdated } = useSelector((state) => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);

  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    Amount: "",
    Quantity: "",
    image: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (id) {
      dispatch(getProductAsync(id));
    }
  }, [id, dispatch]);


  useEffect(() => {
    if (product) {
      setInputForm(product);
    }
  }, [product]);


  useEffect(() => {
    if (isUpdated) {
      navigate("/");
    }
  }, [isUpdated, navigate]);

  useEffect(() => {
    if (!user) {
      navigate("/signIn");
    }
  }, [user, navigate]);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleFileChanged = async (e) => {
    if (e.target.files && e.target.files[0]) {
      try {
        const imagePath = await uploadImage(e.target.files[0]);
        setInputForm({
          ...inputForm,
          image: imagePath,
        });
        setErrors((prev) => ({
          ...prev,
          image: "",
        }));
      } catch (error) {
        console.error("Image upload failed", error);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!inputForm.title.trim()) newErrors.title = "Title is required";
    if (!inputForm.desc.trim()) newErrors.desc = "Description is required";
    if (!inputForm.price) newErrors.price = "Price is required";
    if (!inputForm.category || inputForm.category === "Select Category")
      newErrors.category = "Please select a valid category";
    if (!inputForm.image.trim()) newErrors.image = "Image is required";
    if (!inputForm.Amount.trim()) newErrors.Amount = "Amount is required";
    if (!inputForm.Quantity) newErrors.Quantity = "Quantity is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(updateProductAsync(inputForm));
  };

  return (
    <Container className="edit-product-container">
      <h1 className="edit-product-title">Edit Product</h1>

      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Title</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Description</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Description"
              name="desc"
              value={inputForm.desc}
              onChange={handleChanged}
              isInvalid={!!errors.desc}
            />
            <Form.Control.Feedback type="invalid">{errors.desc}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Price</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter Price"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Category</Form.Label>
          <Col sm="10">
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
              isInvalid={!!errors.category}
            >
              <option>Select Category</option>
              <option value="Fresh Vegetables">Fresh Vegetables</option>
              <option value="Fresh Fruits">Fresh Fruits</option>
              <option value="Cold Drinks & Juices">Cold Drinks & Juices</option>
              <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
              <option value="Snacks & Munchies">Snacks & Munchies</option>
              <option value="Ice Creams & Frozen Desserts">Ice Creams & Frozen Desserts</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Amount</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Amount"
              name="Amount"
              value={inputForm.Amount}
              onChange={handleChanged}
              isInvalid={!!errors.Amount}
            />
            <Form.Control.Feedback type="invalid">{errors.Amount}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Quantity</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter Quantity"
              name="Quantity"
              value={inputForm.Quantity}
              onChange={handleChanged}
              isInvalid={!!errors.Quantity}
            />
            <Form.Control.Feedback type="invalid">{errors.Quantity}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image</Form.Label>
          <Col sm="10">
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChanged}
              isInvalid={!!errors.image}
            />
          </Col>
        </Form.Group>

        <div className="text-end">
          <Button variant="primary" type="submit">
            <FaCheck /> Update Product
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProduct;
