import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Employee from "./Components/Employee";
import EmployeeDetails from "./Components/EmployeeDetails";
import Dashboard from "./Components/Dashboard";

const initialEmployee = [
  { id: 15, first_name: "Сергій", last_name: "Петренко", midl_name: "Петрович", status: "Звільнений", email: "serg.pt@example.com", phone: "+380501234567" },
  { id: 16, first_name: "Анна", last_name: "Іваненко", midl_name: "Василівна", status: "Активний", email: "anna.sh@example.com", phone: "+380631112233" },
  { id: 17, first_name: "Олег", last_name: "Данилюк", midl_name: "Коваленко", status: "Активний", email: "oleh.dn@example.com", phone: "+380671234890" },
  { id: 18, first_name: "Марія", last_name: "Гриневич", midl_name: null, status: "Активний", email: "masha.hr@example.com", phone: "+380501112233" },
  { id: 19, first_name: "Іван", last_name: "Коваленко", midl_name: "Констянтинович", status: "Звільнений", email: "ivan.kov@example.com", phone: "+380501234890" },
  { id: 20, first_name: "Вікторія", last_name: "Сидоренко", midl_name: null, status: "Звільнений", email: "vika.sd@example.com", phone: "+380671112233" },
  { id: 21, first_name: "Дмитро", last_name: "Омельченко", midl_name: "Коваленко", status: "Активний", email: "dmytro.om@example.com", phone: "+380931234567" },
  { id: 22, first_name: "Ярослав", last_name: "Марковий", midl_name: "Іванович", status: "Активний", email: "yaroslav.m.v@gmail.com", phone: "+380982837723" },
];

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
  const [employees, setEmployees] = useState(initialEmployee);
  const [projects, setProjects] = useState(initialProjects);

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