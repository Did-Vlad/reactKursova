import React from "react";
import { Link } from "react-router-dom";

function EmployeeCard({ id, first_name, last_name, status, email, phone }) {
  const statusColor = status === "Активний" ? "bg-success" : "bg-secondary";
  
  return (
<div className="card h-100 shadow-sm border-0">
    <div className="card-body d-flex flex-column">
        <span className={`badge ${statusColor} mb-2 align-self-start`}>{status}</span>
    <h5 className="card-title fw-bold">{first_name} {last_name}</h5>        
    <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
<div className="mt-auto pt-3">
    <p className="mb-1 text-dark"><strong>Phone:</strong> {phone}</p>          
<Link to={`/employee/${id}`} className="btn btn-primary mt-3 w-100">More</Link>
    </div>
    </div>
</div>
  );
}

export default EmployeeCard;