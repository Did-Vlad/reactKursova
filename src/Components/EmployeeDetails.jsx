import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeDetails({employees}) {
    const {id} = useParams(); 
    const employee = employees.find((item) => item.id === Number(id));

    if (!employee) {
        return <div className="container mt-5 text-center"><h3>Employee couldn't be found</h3>
        <Link to="/employees" className="btn btn-primary mt-3">Return to list</Link>
        </div>;     
    }

return(
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
    <span className={`badge ${employee.status === 'Активний' ? 'bg-success' : 'bg-danger'}`}>{employee.status}</span>
        </div>
      </div>
    </div>
  </div>
);
}
export default EmployeeDetails;
