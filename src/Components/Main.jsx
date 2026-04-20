import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main({ items }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reportDeadline, setReportDeadline] = useState(600);
  const [selectProject, setSelectedProject] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reportDeadline <= 0) return;
    const interval = setInterval(() => {
      setReportDeadline((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [reportDeadline]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const projects = ["All", ...new Set(items.map((emp) => emp.projects))];

  const filteredEmployees = items.filter((emp) => {
    if (selectProject === "All") return true;
    return emp.projects === selectProject;
  });

  if (isLoading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status"></div>
        <h4 className="mt-4 text-muted fw-light">Loading data...</h4>
      </div>
    );
  }

  return (
    <main className="container pb-5">
      <div className="alert alert-info d-flex justify-content-between align-items-center shadow-sm border-0 py-3 mb-4">
        <div>
          <strong>Status:</strong> The project reporting window has been opened.
        </div>
        <div className="badge bg-dark fs-6">
          {formatTime(reportDeadline)}
        </div>
      </div>

      <div className="row align-items-center mb-4">
        <div className="col-md-7">
          <h1 className="display-6 fw-bold text-dark">Project teams</h1>
          <p className="text-muted">Responsible specialists in development areas</p>
        </div>

        <div className="col-md-5">
          <label className="form-label text-muted small">Filtered by project:</label>
          <select
            className="form-select shadow-sm"
            value={selectProject}
            onChange={(e) => setSelectedProject(e.target.value)}>
            {projects.map((proj, index) => (
              <option 
              key={index} 
              value={proj}>
              {proj}
              </option>
            ))}
          </select>
        </div>
      </div>

      <hr className="mb-5 opacity-10" />

      <div className="row g-4">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <div className="col-xl-4 col-md-6" key={emp.id}>
              <EmployeeCard {...emp} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5 bg-light rounded border-dashed">
            <p className="text-muted">At this moment in project "{selectProject}", there are no specialists.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;