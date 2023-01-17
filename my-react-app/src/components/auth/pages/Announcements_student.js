import { collection, FieldValue } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from '../../../firebase-config';
import { getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"
import { async } from "@firebase/util";
import { Container, Row, Col } from 'react-bootstrap';
import '../../../Announcements_student.css';



const Announcements_student = () => {
    const [announcements, setAnnouncements] = useState([]);
    const announcementsCollectionsref = collection(db, "Announcements")

    useEffect(() => {
        const getAnnouncements = async () => {
            const data = await getDocs(announcementsCollectionsref)
            setAnnouncements(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getAnnouncements();
    }, []

    )

    return (
        <div className="container-fluid" style={{ padding: 30 }}>
            <h1 >Announcements</h1>
            <h6>"Stay Informed: Check Our Announcement Section for Upcoming News and Updates!"</h6>
            <br/>
            <br/>
            <br/>
            
            {announcements.map((announcement) => {
                return(
                <div>
                
                <Col className="announcement-card" xs={12} md={6} lg={4}>
                    <div className="card">
                        <div className="card-body">
                        
                            <p className="card-text">{announcement.Announcement}</p>
                        </div>
                    </div>
                </Col>
                </div>
                )
            })}

        </div>
    )
};

export default Announcements_student;
