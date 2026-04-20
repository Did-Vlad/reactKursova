import React, {useState, useEffect} from "react";
import EmployeeCard from "./EmpolyeeCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main({items}) {
  const [isLoading, setIsLoading] = useState(true);
  const [reportDeadline, setReportDedline] = useState(600);
  const [selectProject, ,setSelect] = useState("All"); //стани для фільтрацій по проєктам 

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

const projects = ["All", ...new Set(items.map(emp => EmployeeCard.projects))]; //Весь список унікальних проєктів з масиву Empoyee.

const filterforProject = items.filter((emp) =>{
  if (selectProject === "All") return true;
  return emp.projects === selectProject;
}); //Фільтр співробітників по проєктам.

export default Main;