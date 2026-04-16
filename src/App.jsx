import React, {useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Main from "./Components/Main";
import EmployeeDetails from "./Components/EmployeeDetails.jsx";

const initialEmployee = [
{id: 1, name:"Анна Ковальчук", position: "Fullstack Developer", salary: "55000", experience: "4 years", skills: ["React", "Laravel", "SQL"], img: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg", description: "Відповідає за архітектуру бази даних."}, 
{id: 1, name:"Вадим Коваль", position: "UI/UX Designer", salary: "40000", experience: "2 years", skills: ["Figma", "Photoshop"], img: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg", description: "Створює сучасні інтерфейси."},
{id: 1, name:"Олег Мороз", position: "Project Manager", salary: "60000", experience: "6 years", skills: ["Agile", "Jira"], img: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg", description: "Керує термінами та командою."},
];


function App(){
 const [employees] = useState(initialEmployee);

return(
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">HR-Portal</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Dashboard</Link>
        <Link className="nav-link" to="/employees">Employees</Link>
        </div>
    </div>
    </nav>

    <Routes>
    <Route path="/" element={<Dashboard employees = {employees}/>}/>
    <Route path="/employees" element={<Main items = {employees}/>}/>
    <Route path="/employee/:id" element={<EmployeeDetails employees = {employees}/>}/>
    </Routes>
      </BrowserRouter>
      );
}
export default App;