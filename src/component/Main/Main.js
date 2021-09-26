// import 
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmers from '../programmers/Programmers';
import './Main.css'

const Main = () => {
  const [programmers , setProgrammers] = useState([]);

 // load data
  useEffect(()=>{
   fetch('./myData.JSON')
   .then(res=> res.json())
   .then(data=> setProgrammers(data));
  } ,[]) 

  // get Select Names
  const [name , setName] = useState([]);

  // Add to cart funciton
  const [selectProgrammers , setSelectProgrammers] = useState([]);

  const addCartHandle = (programmer , istrue) =>{
    programmer.isturo = istrue;
    const newProgrammers = [...selectProgrammers , programmer]
    setSelectProgrammers(newProgrammers)

    const newName = [...name , programmer.name]
    setName(newName);
  }
 
 // Get total salary
  const reducer = (prev , current) => prev + current.salary;
  const total = selectProgrammers.reduce(reducer , 0);

 // main
  return (
    <main className='container-fluid p-4'>
       <section className= 'row'>
           <div className='col-lg-9 programmers-section'> 
              <div className="row"> 
              {
              programmers.map(programmer => <Programmers programmer={programmer} key={programmer.id} addCartHandle={addCartHandle}></Programmers> )
              }               
               </div>
             </div>
              <div className='col-lg-3  h-100 '>
                <div className='ms-5 selected-cart  p-3 '>     
                   <h6> Total given : {selectProgrammers.length} </h6>
                   <h6> Total paid : {total} </h6>
                   <h6>programmers names : </h6>
                   {
                      selectProgrammers.map(programmer => <Cart key={programmer.id} cart={programmer}></Cart>)
                   }
                </div>
              </div>
       </section>
     </main>
  );
};
export default Main;