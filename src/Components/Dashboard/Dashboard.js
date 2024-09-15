// import React, { useState, useEffect } from 'react';
// import { Table, Dropdown, Container, Row, Col } from 'react-bootstrap';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [year, setYear] = useState('1st Year');
//   // const [students, setStudents] = useState([]);

//   useEffect(() => {
//     // Fetch students data based on the selected year
//     fetchStudentsData(year);
//   }, [year]);

//   const fetchStudentsData = (year) => {
//     // Replace with your data fetching logic
//     // Example: setStudents(fetchedData);
//   };

//   return (
//     <Container className="mt-5 dashboard-container">
//       <Row className="justify-content-md-center">
//         <Col md={10}>
//           <h2 className="text-center">CSE Department Student Leaderboard</h2>
//           <Dropdown onSelect={(e) => setYear(e)}>
//             <Dropdown.Toggle variant="primary" id="dropdown-basic">
//               {year}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item eventKey="1st Year">1st Year</Dropdown.Item>
//               <Dropdown.Item eventKey="2nd Year">2nd Year</Dropdown.Item>
//               <Dropdown.Item eventKey="3rd Year">3rd Year</Dropdown.Item>
//               <Dropdown.Item eventKey="4th Year">4th Year</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Table striped bordered hover className="mt-3">
//             <thead>
//               <tr>
//                 <th>Rank</th>
//                 <th>Student Name</th>
//                 <th>Register Number</th>
//                 <th>CGPA</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr key={student.registerNumber}>
//                   <td>{index + 1}</td>
//                   <td>{student.name}</td>
//                   <td>{student.registerNumber}</td>
//                   <td>{student.cgpa}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;
