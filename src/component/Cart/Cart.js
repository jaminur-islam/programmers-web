// import
import React from 'react';

// Cart component
const Cart = (props) => {
  const {img , name } = props.cart
  return (
    <div className='selected'>
      <img src={img} alt={name} /> 
     <a href="http://www.facebook.com">  <li>  {name} </li></a>
     <i className="fas fa-check ms-2"></i>

    </div>
  );
};

export default Cart;