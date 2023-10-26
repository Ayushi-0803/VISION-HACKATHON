import React, { Component } from 'react';
import './Attendance.css'; // Import the CSS file
import Navbar from './Navbar';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../firebase-config'; // Import your Firebase configuration
const markStyle = {
    marginLeft:'1vw',
      
     
    }
class Attendance extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        { id: 1, name: 'Student 1', present: false },
        { id: 2, name: 'Student 2', present: false },
        { id: 3, name: 'Student 3', present: false },
        { id: 4, name: 'Student 4', present: false },
        { id: 5, name: 'Student 5', present: false },
        // Add more students as needed
      ],
    };
  }

  markAttendance = (studentId) => {
    this.setState((prevState) => ({
      students: prevState.students.map((student) => {
        if (student.id === studentId) {
          return { ...student, present: !student.present };
        }
        return student;
      }),
    }));
  };

  submitAttendance = async () => {
    try {
      const attendanceCollectionRef = collection(db, 'attendance'); // Replace 'attendance' with your Firebase collection name

      this.state.students.forEach(async (student) => {
        await addDoc(attendanceCollectionRef, {
          studentId: student.id,
          studentName: student.name,
          isPresent: student.present,
        });
      });

      alert('Attendance data submitted successfully!');
    } catch (error) {
      console.error('Error submitting attendance data:', error);
    }
  };

  render() {
    return (
      <div className="attendance-container">
        <h2>Mark Attendance</h2>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Present</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={student.present}
                    onChange={() => this.markAttendance(student.id)}
                    className="attendance-checkbox"
                  />
                  <label style={markStyle}>Mark</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button button
                          type="button"
                          class="btn btn-success"
                          style={{ marginTop: 20, marginLeft:20,align:"center"}}
                          onClick={this.submitAttendance}>Submit Attendance</button>
      </div>
    );
  }
}

export default Attendance;
