import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main({ items }) {
  // 1. Дебаг: подивись у консоль, чи приходять сюди взагалі дані
  console.log("Дані, отримані в Main:", items);

  const [isLoading, setIsLoading] = useState(true);
  const [selectProject, setSelectedProject] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Безпечна обробка масиву, якщо items раптом undefined
  const safeItems = items || [];
  const projects = ["All", ...new Set(safeItems.map((emp) => emp.projects))];

  const filteredEmployees = safeItems.filter((emp) => {
    if (selectProject === "All") return true;
    return emp.projects === selectProject;
  });

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  // Твій основний рендер
  return (
    <main className="container pb-5">
      {/* --- ТУТ ТВОЄ ВІТАННЯ --- */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold">Hello and welcome!</h1>
          <p className="col-md-8 fs-4 text-muted">
            Welcome to my site for managing employees. Here you can track your team and projects.
          </p>
        </div>
      </div>
      {/* ------------------------- */}

      <div className="row align-items-center mb-4">
        <div className="col-md-5">
           {/* ... твій селект ... */}
           <select className="form-select" value={selectProject} onChange={(e) => setSelectedProject(e.target.value)}>
             {projects.map((proj, index) => <option key={index} value={proj}>{proj}</option>)}
           </select>
        </div>
      </div>

      <div className="row g-4">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <div className="col-xl-4 col-md-6" key={emp.id}>
              <EmployeeCard {...emp} />
            </div>
          ))
        ) : (
          <p>No specialists found.</p>
        )}
      </div>
    </main>
  );
}

export default Main;