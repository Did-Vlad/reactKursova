import React from "react";
const StatCard = ({title, value, color}) =>(
    <div className="col-mb-4">
        <div className={'card text-white bg-${color} mb-3 shadow-sm border-0'}>
            <div className="card-body text-center">
                <h5 className="card-title opacity-75">{title}</h5>
                <p className="card-text display-5 fw-bold">{value}</p>
            </div>
        </div>
    </div>
);

function Dashboard({employees}){
    const totalEmployees = employees.length;
    const totalBudget = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const avgSalary = totalEmployees > 0 ? Math.round(totalBudget / totalEmployees) : 0;

return (
 <div className="container mt-4 animate__animated animate__fadeIn">
    <h2 className="mb-4 fw-light">Analytical review</h2>
<div className="row">
    <StatCard title="All Employees" value={totalEmployees} color="primary"/>
    <StatCard title="General Fund (UAH)" value={totalBudget.tolocaleString} color="success"/>
    <StatCard title="Average salary" value={avgSalary.toLocaleString()} color="info"/>
</div>
 </div>
);
}
export default Dashboard;