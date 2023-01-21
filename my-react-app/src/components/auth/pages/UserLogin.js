import React from"react";
import{Link} from "react-router-dom";
import{Form}from "react-bootstrap";
import{Button}from "react-bootstrap";

const UserLogin=()=>{
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Login </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicpassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr/>

      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account?<Link to="/signUp">
          Register
        </Link>
      </div>
    </>
  );
}
export default UserLogin;