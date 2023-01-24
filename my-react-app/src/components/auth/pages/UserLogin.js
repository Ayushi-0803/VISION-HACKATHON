import React,{useState,useEffect} from"react";
import{Link,useNavigate} from "react-router-dom";
import{Form,Alert}from "react-bootstrap";
import{Button}from "react-bootstrap";
import { useUserAuth } from "../../../context/UserAuthContext";
const UserLogin=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { logIn } = useUserAuth();
   const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(
          email,
          password,
          
        );

        navigate("/dashboard");
        setTimeout(() => {
          alert("registration successful");
        }, 3000);
      } catch (err) {
        setError(err.message);
      }
    };
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Login </h2>
        {error &&<Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicpassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account?<Link to="/signUp">Register</Link>
      </div>
    </>
  );
}
export default UserLogin;