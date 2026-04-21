import React, { useMemo } from "react";
import { Link } from "react-router-dom";

function Main ({employees = []}){
    const stats = useMemo(() => {
        const totalEmployees = employees.length;
        const totalSalary = employees.reduce((acc, emp) => acc + Number(emp.salary || 0), 0);
        const uniqProject = new Set(employees.map((e) => e.project)).size;

 return {totalEmployees, totalSalary, uniqProject};
}, [employees]);
            
return(
    <main className="container py-5">
    <div className="p-5 mb-5 bg-primary text-white rounded-3 shadow">
                <h1 className="display-4 fw-bold">Hello!</h1>
         <p className="lead">Welcome to Hr-Portal. Manage your team easily.</p>
        <Link to="/employees" className="btn btn-light btn-lg mt-3">View all employees</Link>
    </div>

    <div className="row g-4 mb-5">
        <div className="col-md-4">
            <div className="card shadow-sm -border-0 p-4 text-center">
               <h5 className="text-muted">Total Employees</h5>
               <h2 className="display-5  fw-bold text-success">{stats.totalEmployees}</h2> 
            </div>
        </div>
    </div>
    <div className="row g-4 mb-5">
        <div className="col-md-4">
            <div className="card shadow-sm -border-0 p-4 text-center">
               <h5 className="text-muted">Active Projects</h5>
               <h2 className="display-5  fw-bold text-success">{stats.uniqProject}</h2> 
            </div>
        </div>
    </div>
    <div className="row g-4 mb-5">
        <div className="col-md-4">
            <div className="card shadow-sm -border-0 p-4 text-center">
               <h5 className="text-muted">Tottal Payroll(UAH)</h5>
               <h2 className="display-5  fw-bold text-success">{stats.totalSalary}</h2> 
            </div>
        </div>
    </div>
    </main>
    );
}

export default Main;