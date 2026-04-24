import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="container py-5 text-center">
      <div className="p-5 mb-5 bg-primary text-white rounded-3 shadow">
        <h1 className="display-3 fw-bold">HR-Portal</h1>
        <p className="lead mt-3">Your central team management system.</p>
        <hr className="my-4 border-light" />
        <p>Manage employees, view projects, and track project progress.</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="/employees" className="btn btn-light btn-lg">List employees</Link>
          <Link to="/dashboard" className="btn btn-outline-light btn-lg">Go to analitics</Link>
        </div>
      </div>
    </main>
  );
}

export default Main;