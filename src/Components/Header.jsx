import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header (){
    return(
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <div className="conteiner d-flex justify-contet-between align-items-center">
                    <ul className="navbar-nav d-flex flex-row gap-3 mb-0" style={{listStyle:'none'}}>
                        <li className="nav-item"><Link className="nav-link" to="/">Main</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/employees">Employees</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;