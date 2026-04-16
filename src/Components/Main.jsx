import React, { useState, useEffect } from "react"; 
import BookCard from "./BookCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function Main({ items, onBuy }) { 
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() =>{
    const timer = setTimeout(() =>{
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() =>{
    if (timeLeft <= 0) return;
    const interval = setInterval(() =>{
      setTimeLeft(prev => prev - 1 );
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  if (isLoading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
        <img src="https://i.gifer.com/ZKZg.gif" alt="Loading..." width="100" />
        <h4 className="mt-3 text-secondary">Завантаження каталогу...</h4>
      </div>
    );
  }
  return (
<main className="mainContent conteiner py-4">
  {timeLeft > 0 && (
    <div className=" alert alert-warning text-center shadow-sm border-0 mb-4" style={{borderRadius:'15px'}}>
      <span className="fs-5">Акція завершується через : <strong>{timeLeft}сек.</strong></span>
    </div>
  )}
      <div className="text-center py-5 mb-4 bg-light rounded-3 shadow-sm">
        <h1 className="display-5 fw-bold">Ласкаво просимо на наш сайт</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Ми раді привітати на головній сторінці навчального проєкту
        </p>
      </div>
    <div className="row g-4">
    {items.map((book) => (
    <div className="col-12 col-md-6 col-lg-4" key={book.id}>
        <BookCard title={book.title} price={book.price} img={book.img} onBuy={onBuy}/>
    </div>
    )
   )
  }
    </div>
</main>
);
}

export default Main;