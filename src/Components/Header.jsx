import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header ({count, total}){
    return(
<header className="header">
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
<div className="container d-flex justify-content-between align-items-center">             
      <ul className="navbar-nav d-flex flex-row gap-3 mb-0" style={{ listStyle: 'none' }}>
     <li className="nav-item"><a className="nav-link" href="/">Головна</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Каталог</a></li>
         <li className="nav-item"><a className="nav-link" href="#">Про нас</a></li>
     </ul>

<div className="navbar-text text-white">Користувач: Vlad | Сума: <strong className="text-success">{total} грн</strong></div>
    </div>
    </nav>
</header>
    );
}

export default Header;