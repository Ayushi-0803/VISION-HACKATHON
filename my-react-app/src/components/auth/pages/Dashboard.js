import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const usersCollectionRef = collection(db, "Register");
  const location = useLocation();

  useEffect(() => {
    setError("");
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get("email");

    const fetchUserData = async () => {
      try {
        const querySnapshot = await getDocs(usersCollectionRef);
        const usersData = [];
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          if (user.email === userEmail) {
            usersData.push(user);
          }
        });
        setUserData(usersData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [usersCollectionRef, location]);

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <div>
        {userData.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Scholar No: {user.ScholarNo}</p>
            <p>Branch: {user.Branch}</p>
            <p>Course: {user.Course}</p>
            <p>Contact: {user.Contact}</p>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
