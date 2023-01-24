import React, { useState ,useEffect} from "react";
import { Link,useNavigate} from "react-router-dom";
import { Form ,Alert} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../../context/UserAuthContext";

const Registration = () => {
  const[email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [scholar_no, setScholarNo] = useState("");
  const [branch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const[error,setError]=useState("");
  const {signUp}=useUserAuth();
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
                e.preventDefault();
                setError("")
                try{
                  await signUp(email, password, name, contact, scholar_no,branch,course);
                
                  navigate("/dashboard")
                     setTimeout(() => {
                     alert("registration successful")
                     }, 3000);

   
                }
                catch(err){
                  setError(err.message)

                }
              }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Register </h2>
        {error &&<Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSchNo">
            <Form.Control
              type="scholar_no"
              placeholder="Scholar No"
              onChange={(e) => setScholarNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Control
              type="course"
              placeholder="Course"
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBranch">
            <Form.Control
              type="branch"
              placeholder="Branch"
              onChange={(e) => setBranch(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Control
              type="contact"
              placeholder="Contact no"
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>
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
              Register
            </Button>
          </div>
        </Form>
        <hr />
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account?<Link to="/login">Log In</Link>
      </div>
    </>
  );
};
export default Registration;
