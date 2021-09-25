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
 

  const reducer = (prev , current) => prev + current.salary;
  const total = selectProgrammers.reduce(reducer , 0);



  return (
    <main className='container p-4'>
       <section className= 'row'>
           <div className='col-lg-9 programmers-section'> 
              <div className="row"> 
              {
              programmers.map(programmer => <Programmers programmer={programmer} key={programmer.id} addCartHandle={addCartHandle}></Programmers> )
              }
                         
              </div>
            </div>

            {/* <h6> names: {[...name + ' ']} </h6> */}

     
              <div className='col-lg-3 cart-section border h-100 p-3'>
                   <h5> Total-add :{selectProgrammers.length} </h5>
                   <h5> Total-deposit-mony : {total} </h5>
                   <h6> Total added programmers name : </h6>
                   {
                      selectProgrammers.map(programmer => <Cart key={programmer.id}></Cart>)
                   }
              </div>
       </section>
    </main>
  );
};

export default Main;