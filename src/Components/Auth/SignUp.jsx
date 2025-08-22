import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { registerAsync } from "../../Services/Actions/userAction";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isCreated } = useSelector((state) => state.userReducer);
  const intialState = {
    email: "",
    password: "",
    cpass: "",
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit", inputForm);
    dispatch(registerAsync(inputForm));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/signIn");
    }
  }, [isCreated]);
  return (
    <>
          <Container className="signup-container mt-3">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        {error && <p className="error-text">{error}</p>}

        <Form className="signup-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={inputForm.email}
              onChange={handleChanged}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={inputForm.password}
              onChange={handleChanged}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="cpass"
              value={inputForm.cpass}
              onChange={handleChanged}
              required
            />
          </Form.Group>

          <Button className="signup-btn" type="submit">
            Sign Up
          </Button>
        </Form>

        <p className="signin-text">
          Already have an account?{" "}
          <Link to="/signIn" className="signin-link">
            Sign In
          </Link>
        </p>
      </div>
    </Container>
    </>
  );
};

export default SignUp;