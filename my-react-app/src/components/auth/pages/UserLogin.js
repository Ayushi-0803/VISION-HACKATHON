import React,{useState,useEffect} from"react";
import{Link,useNavigate} from "react-router-dom";
import{Form,Alert}from "react-bootstrap";
import{Button}from "react-bootstrap";
import { useUserAuth } from "../../../context/UserAuthContext";
import Pic1 from "../../images/Pic1.png"
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

        navigate("/dashboard?email=${email}");
        setTimeout(() => {
          alert("registration successful");
        }, 3000);
      } catch (err) {
        setError(err.message);
      }
    };
  return (
    <>
     <img
                      src={Pic1}
                      alt=""
                      width="600px"
                      height="570px"
                      display="flex"
                      flex-direction="column"
                      align-items="center"
                    />
      <div className="p-4 box" style={{ marginTop:-500 ,marginLeft:590 }}>
        <h2 className="mb-3"> Login </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ width: "50vw" }}
          >
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicpassword"
            style={{ width: "50vw" }}
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              type="submit"
              style={{ width: "10vw", marginBottom: 0 }}
            >
              Log In
            </Button>
            <div
              className="text-center"
              style={{marginTop:'-5vh' }}
            >
              Don't have an account ?
              <Link to="/signUp" style={{ color: "blue", marginLeft:5 }}>
                {" "}
                Register
              </Link>
              <div
              className="text-center"
              style={{marginTop:'0vh' }}
            ></div>
              Forgot Password?
              <Link to="/send" style={{ color: "blue", marginLeft:5 }}>
                {" "}
                Enter your Email
              </Link>
            </div>
          </div>
        </Form>
        <hr />
      </div>
    </>
  );
}
export default UserLogin;