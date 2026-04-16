import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function BookCard(props){
    const [localCount, setLocalCount] = useState(() =>{
      const saved = localStorage.getItem('count_1${props.title}');
      return saved ? parseInt(saved) : 0;
    });
  useEffect(() =>{
    localStorage.setItem('count_${props.title}', localCount);}, [localCount, props.title]);
  
    const handeBuyClick = () => {
        setLocalCount(localCount + 1);
        
        if (props.onBuy) {
            props.onBuy(props.price);
        }
    };
    return (
        <div className="card h-100 shadow-sm">
          <img src={props.img} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.price} грн</p>
            
            <div className="mb-3">
              <span className="badge bg-info text-dark">
                У кошику:{localCount} шт.
              </span>
            </div>

            <button onClick={handeBuyClick}>Купити</button>
          </div>
        </div>
      );
}

export default BookCard;