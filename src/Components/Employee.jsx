import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchEmployees = async (status = "All") => {
    setIsLoading(true);
    try {
      const params = status !== "All" ? { status } : {};
      const response = await axios.get("http://127.0.0.1:8000/api/employees", { params });
      setEmployees(response.data.data || response.data);
    } catch (error) {
      console.error("Помилка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading data from database...</p>
      </div>
    );
  }

  return (
    <main className="container pb-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold">Team Management</h1>
          <p className="col-md-8 fs-4 text-muted">
            Data is now loaded directly from the Laravel API Axios.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-4">
        <div className="col-md-4">
          <label className="mb-2">Filter by Status:</label>
          <select
            className="form-select"
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              fetchEmployees(e.target.value);
            }}>
            <option value="All">All employees</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {employees.length > 0 ? (
          employees.map((emp) => (
            <div className="col-xl-4 col-md-6" key={emp.id}>
              <EmployeeCard {...emp} />
            </div>
          ))
        ) : (
          <p className="text-center">No specialists found.</p>
        )}
      </div>
    </main>
  );
}

export default Employee;