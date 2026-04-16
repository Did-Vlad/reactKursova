import React from "react";
import { useParams } from "react-router-dom";

function EmployeeDetails({employees}) {
    const {id} = useParams(); //береться id з посилання /employee/1
    const employee = employee.find((emp) => emp.id === parseInt(id));
    
    if (!employee) {
        return <div className="container mt-5 text-center"><h3>Employee couldn't be found</h3></div>;
    }


return(
 <div className="container mt-4">
    <Link to = "/emplyees" className= "btn outline-secondary mb-4 btn-sm"> Back to the list </Link>
    <div className="card shadow border-0 overflow-hidden"></div>
    <div className="row g-0">
    <div className="col-md-4">
        <img src={employee.img} className="img-fluid h-100" style={{objectFit:'cover'}} alt="employee.name"/>
    </div>
        <div className="col-md-8">
            <div className="card-body p-4">
                <h1 className="card-title fw-bold mb-0">{employee.name}</h1>
                <p className="text-primary fs-5 mb-3">{mployee.position}</p>
                <hr/>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <p><strong>Experience:</strong> {employee.experience}</p>
                        <p><strong>Salary:</strong>{employee.salary.toLocalString()} UAH</p>
                    </div>
                    <div className="col-sm-6">
                        <p><strong>Skills:</strong>{employee.descriprion}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
);
}
export default EmployeeDetails;
