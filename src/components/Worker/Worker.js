import React from 'react';
import './Worker.css';

const Worker = (props) => {
  const { name, img, amount, age, role, gender } = props.worker;
  return (
    <div className="worker-card">
      <img src={img} alt="" />
        <div className='others'>
            <h3>Name: {name}</h3>
            <h5>Age: {age}</h5>
            <h5>Gender: {gender}</h5>
            <h4>Role: {role}</h4>
            <h2>Amount: ₹{amount}</h2>
        </div>
        <button 
          onClick={() => props.handleAddToCart(props.worker)}
          className='btn-regular'
        >Add to Cart</button>
        <div className="social-icons">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
    </div>
  );
};

export default Worker;
