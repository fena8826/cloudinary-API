import { useEffect, useState } from "react";
import { Button,  Container, Form} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { signInAsync, signInWithGoogleAsync } from "../../Services/Actions/userAction";
import "./SignIn.css";
 
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, error} = useSelector(state => state.userReducer);
  const intialState = {
    email: "",
    password: "",
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
    dispatch(signInAsync(inputForm));
  };

  const handleGoogleLogin = () => {
    dispatch(signInWithGoogleAsync());
  }

  useEffect(() => {
    if(user){
        navigate("/")
    }
  }, [user]);
  return (
    <>
      <Container className="signin-container mt-3">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>
        {error && <p className="error-text">{error}</p>}

        <Form className="signin-form" onSubmit={handleSubmit}>
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

          <Button className="signin-btn" type="submit">
            Sign In
          </Button>
        </Form>

        <div className="divider">or sign in with</div>

        <div className="social-login">
          <Button className="social-btn google" onClick={handleGoogleLogin}>
            <FaGoogle />
          </Button>
          <Button className="social-btn facebook">
            <FaFacebookF />
          </Button>
          <Button className="social-btn linkedin">
            <FaLinkedinIn />
          </Button>
        </div>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signUp" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </Container>
    </>
  );
};

export default SignIn;