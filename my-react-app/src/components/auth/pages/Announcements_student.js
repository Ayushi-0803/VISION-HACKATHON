import { collection, FieldValue } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from '../../../firebase-config'
import { getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"
import { async } from "@firebase/util";
import { Container, Row, Col } from 'react-bootstrap';





const Announcements_student = () => {

    const [newAnnouncement, setNewAnnouncement] = useState("");
    const [announcements, setAnnouncements] = useState([]);
    const announcementsCollectionref = collection(db, "Announcements")




    useEffect(() => {
        const getAnnouncements = async () => {
            const data = await getDocs(announcementsCollectionref)
            setAnnouncements(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getAnnouncements();
    }, []

    )




    return (
        <div className="container-fluid" style={{ padding: 50 }}>
            <h1 style={{color:"purple"}}>Announcements</h1>
            <h6>"Stay Informed: Check Our Announcement Section for Upcoming News and Updates!"</h6>

            <br />
            <br />

            <div class="card-deck" >
                {announcements.map((announcement) => {
                    return (

                        <div class="card" style={{ marginBottom: 20 }}>

                            <div class="card-body">

                                <p class="card-text">{announcement.Announcement}</p>
                            </div>
                        </div>

                    )
                })}
            </div>

            <h6>Total Announcements : {announcements.length}</h6>
        </div>
    );
};


export default Announcements_student;