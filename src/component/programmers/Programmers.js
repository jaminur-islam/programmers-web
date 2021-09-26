// import
import React from 'react';

// Programmers component
const Programmers = (props) => {
  const {isturo} = props.programmer
  const {addCartHandle} = props;
  const {name , img , email , salary , home , role} = props.programmer || {};
  const {programmer} = props;

  return (
    <div className='col-12 col-md-6 col-lg-4 siglePorgrammer text-center ' >
      <div className='p-4 mb-3  cartt-item '>
        <img src={img} alt="" className='d-block' />
        <div className='text-start'>
         <h6 className='h6 text-center'>{name.slice(0,16)}</h6>
         <h6 className='head-6'> email: {email.slice(5,21)}</h6>
         <h6 className='head-6'> Courses-Role : {role}</h6>
         <h6 className='head-6'> Salary  : {salary}</h6>
         <h6 className='head-6'> Home : {home}</h6>
         </div>
         {
           isturo? <button className='button2'> <i className="fas fa-funnel-dollar"></i> Salary paid </button> :<button className='button' onClick={()=> addCartHandle(programmer , true)}> <i className="fas fa-hand-holding-usd"></i> Pay salary </button> 
         }
      </div>
    </div>
  );
};

export default Programmers;