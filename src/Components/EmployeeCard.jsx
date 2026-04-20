import React from "react";

function EmployeeCard({name, position, project, salary, img, experience }){
    return(
<div className="card h-100 shadow-sm border-0">
    <img
    src={img || "https://via.placeholder.com/200x100"} 
    className="card-img-top"
    alt={name}
    style={{height: "100px", objectFit: "cover"}} />
    <div className="card-body d-flex flex-column">
    <span className="badge bg-primary mb-2 alight-self-start">{project}</span>
    
    <h5 className="card-title fw-bold">{name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{position}</h6>

    <div className="mt-auto pt-3">
        <p className="mb-1 text-dark">
            <strong>Salary:</strong> {salary} UAH
        </p>
        <p className="mb-0 text-muted small">
            Experience: {experience}
        </p>
    </div>
    </div>
</div>
    );
}
export default EmployeeCard;