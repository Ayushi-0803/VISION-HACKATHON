import React, { useState } from "react";
// import {adminlogin} from "./AdminLogin.js";
import Pic1 from "../../images/Pic1.png";
import "./Contact.css";
import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const ContactNew = () => {
  const [newFname, setNewFname] = useState("");
  const [newLname, setNewLname] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const usersCollectionRef = collection(db, "DontTouch");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      fname: newFname,
      lname: newLname,
      phone: newPhone,
      email: newEmail,
      address: newAddress,
      message: newMessage,
    });
    if (
      newFname &&
      newLname &&
      newPhone &&
      newEmail &&
      newAddress &&
      newMessage
    ) {
      alert("Data stored");
    } else {
      alert("all fields are neccessary");
    }
    window.location.reload(false);
  };

  return (
    <>
      <div className="overall">
        <section className="contactus-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-17 ml-10 mr-10">
                <div className="row">
                  <div className="contact-leftside col-12 col-lg-5">
                    <h1 className="main-heading fw-bold text-center">
                      CONTACT US
                    </h1>
                    <img
                      src={Pic1}
                      alt=""
                      width="100px"
                      height="100px"
                      display="flex"
                      flex-direction="column"
                      align-items="center"
                    />
                  </div>
                  {/* right side contact form  */}
                  <div className="contact-rightside col-12 col-lg-7">
                    <form>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            onChange={(event) => {
                              setNewFname(event.target.value);
                            }}
                            type="text"
                            className="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            onChange={(event) => {
                              setNewLname(event.target.value);
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number "
                            onChange={(event) => {
                              setNewPhone(event.target.value);
                            }}
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email ID"
                            onChange={(event) => {
                              setNewEmail(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 contact-input-feild">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Drop Your Address"
                            onChange={(event) => {
                              setNewAddress(event.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 ">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Message"
                            onChange={(event) => {
                              setNewMessage(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          class="btn btn-success"
                          onClick={createUser}
                          style={{ marginTop: 20 }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactNew;
