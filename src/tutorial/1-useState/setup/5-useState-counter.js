import React, { useState} from 'react';

const UserStateCounter = () => {

  const [value, setvalue] = useState(0);
  const reset = () => {
    setvalue(0);
  };
  const complexIncrease = () => {

    setTimeout(() => {
      //setvalue(value + 1);
        setvalue((prevValue) => {
          return (prevValue + 1);
        });
      }, 2000);
  };
  return (
    <>
    <section style={{margin:'4rem 0'}}>
      <h2>Regular Counter</h2>
      <h4>{value}</h4>

      <button className='btn' onClick={()=>setvalue(value+1)}>Increase</button>
      <button className='btn' onClick={reset}>Reset</button>
      <button className='btn' onClick={()=>setvalue(value-1)}>Decrease</button>
    </section>
      
     <section style={{margin:'4rem 0'}}>
      <h2>Complex Counter</h2>
      <h4>{value}</h4>

      <button className='btn' onClick={()=>complexIncrease()}>Increase</button>

      </section> 
   </>   
  );
}

export default UserStateCounter;
