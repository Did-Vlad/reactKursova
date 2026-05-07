import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function EmployeeDetails() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/employees/${id}`)
            .then(res => {
                setEmployee(res.data.data || res.data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [id]);

    if (isLoading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        );
    }

    if (!employee) {
        return (
            <div className="container mt-5 text-center">
                <h3>Employee couldn't be found</h3>
                <Link to="/employees" className="btn btn-primary mt-3">Return to list</Link>
            </div>
        );
    }

    return (
        <div className="card p-4 shadow-sm">
            <div className="row">
                <div className="col-md-12">
                    <h1>{employee.first_name} {employee.last_name} {employee.midl_name || ""}</h1>
                    <h4 className="text-muted mb-4">{employee.status}</h4>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Email:</strong> {employee.email}</p>
                            <p><strong>Телефон:</strong> {employee.phone}</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>ID:</strong> {employee.id}</p>
                            <p><strong>Дата найму:</strong> {employee.hire_date}</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span className={`badge ${employee.status === 'active' ? 'bg-success' : 'bg-danger'}`}>
                            {employee.status}
                        </span>
                    </div>
                    <div className="mt-4">
                        <Link to="/employees" className="btn btn-secondary">Back to list</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetails;