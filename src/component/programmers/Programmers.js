import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Programmers = (props) => {
  const {isturo} = props.programmer
  const {addCartHandle} = props;
  const {name , img , id , age , salary , home , role} = props.programmer || {};
  const {programmer} = props;

  return (
    <div className='col-lg-4 siglePorgrammer text-center ' >
      <div className='p-4 mb-3 border'>
        <img src={img} alt="" />
         <h6> Name : {name}</h6>
         <h6> Id : {id}</h6>
         <h6> Age : {age}</h6>
         <h6> Role : {role}</h6>
         <h6> Salary  : {salary}</h6>
         <h6> Home : {home}</h6>
         {
           isturo? <button> <i className="fas fa-funnel-dollar"></i> click add </button> :<button onClick={()=> addCartHandle(programmer , true)}> Add to Cart </button> 
         }
        
      </div>
    </div>
  );
};

export default Programmers;