import React, {useState, useEffect} from "react";
import EmployeeCard from "./EmpolyeeCard"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Main({items}) {
  const [isLoading, setIsLoading] = useState(true);
  const [reportDeadline, setReportDedline] = useState(600);
  const [selectProject, ,setSelectedProject] = useState("All"); //стани для фільтрацій по проєктам 

  useEffect(() => {
    const timer = setTimeout (() =>{
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  },[]);

  useEffect(() =>{
    if (reportDeadline <= 0) return;
    const interval = setInterval(() => {
      setReportDedline(prev => prev -1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reportDeadline <= 0) return;
    const interval = setInterval(() => {
      setReportDeadline(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [reportDeadline]);

};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const projects = ["All", ...new Set(items.map(emp => emp.projects))]; //Весь список унікальних проєктів з масиву Empoyee.

const filterforProject = items.filter((emp) =>{
  if (selectProject === "All") return true;
  return emp.projects === selectProject;
}); //Логіка фільтрації співробітників по проєктам.

if (isLoading)
  return (
<div className="d-flex flex-column alight-items-center juctify-content-center" style={{minHeight: '60vh'}}>
  <div className="spinner-border text-primary" role="status"></div>
  <h4 className="mt-4 text-muted fw-light">Loading data...</h4>
</div>
);
 return(
  <main className="container pb-5">
    <div className="alert alert-info d-flex justify-content-between alight-items-center shadow-sm border-0 py-3 mb-4">
      <div>
        <strong>Status:</strong> The project reporting window has been opened.
      </div>
      <div className="badge bg-dark fs-6">
        {formatTime(reportDeadline)}
      </div>
    </div>

    <div className="row alight-items-center mb-4">
      <div className="col-md-7">
        <h1 className="display-6 fw-bold text-dark">Project teams</h1>
        <p className="text-muted">Responsible specialists in development areas</p>
      </div>
    </div>

    <div className="col-md-5">
      <label className="form-lable text-muted small">Filtered by project:</label>
      <select
      className="form-select shadow-sm"
      value={selectProject}
      onChange={(e) => setSelectedProject(e.target.value)}>
        {projects.map((proj, index) => (
        <option key={index} value={proj}>{proj}</option>))}
      </select>
    </div>

    <hr className="mb-5 opacity-10"/>

    <div className="row g-4">
      {filteredEmployee.length > 0 ? (
        filteredEmployee.map((emp) =>(
          <div className="col-xl-4 col-md-6" key={emp.id}>
            <EmployeeCard {...emp} />
          </div>
        ))
      ): (
        <div
         className="col-12 text-center py-5 bg-light rounded border-dashed">
          <p className="text-muted">At this moment in project"{selectProject}", doesn't have specialists.</p>
         </div>
      )}
    </div>
  </main>
 );
export default Main;