import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main({ employees }) {
  const [isLoading, setIsLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const safeEmployees = employees || [];

  const filteredEmployees = safeEmployees.filter((emp) => {
    if (filterStatus === "All") return true;
    return emp.status === filterStatus;
  });

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <main className="container pb-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold">Hello and welcome!</h1>
          <p className="col-md-8 fs-4 text-muted">
            Welcome to my site for managing employees. Here you can track your team and projects.
          </p>
        </div>
      </div>

  <div className="row align-items-center mb-4">
    <div className="col-md-4">
      <label className="mb-2">Фільтр за статусом:</label>
        <select className="form-select" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All employees</option>
          <option value="Активний">Active</option>
          <option value="Звільнений">Fired</option>
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