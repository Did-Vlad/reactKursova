import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Employee from "./Components/Employee";
import EmployeeDetails from "./Components/EmployeeDetails";
import Dashboard from "./Components/Dashboard";
import axios from "axios";

const initialProjects = [
  { id: 9, name: "UI/UX Enhancement", budget: 70000 },
  { id: 8, name: "API Development", budget: 90000 },
  { id: 4, name: "Create DB for new Employee", budget: 120000 },
  { id: 5, name: "CRM System", budget: 150000 },
  { id: 6, name: "Marketing Analytics", budget: 80000 },
  { id: 7, name: "Finance Optimizer", budget: 120000 },
  { id: 10, name: "Data Processing Module", budget: 60000 },
  { id: 11, name: "Financial Reporting", budget: 85000 },
  { id: 12, name: "Testing & QA", budget: 50000 }
];

function App() {
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/employees")
      .then(res => setEmployees(res.data.data || res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/employees" element={<Employee employees={employees} />} />
        <Route path="/employee/:id" element={<EmployeeDetails employees={employees} />} />
        <Route path="/dashboard" element={<Dashboard employees={employees} projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;