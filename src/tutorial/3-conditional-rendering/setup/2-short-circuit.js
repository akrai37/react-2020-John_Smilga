import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, settext] = useState('');
  const [iserror, setiserror] = useState(false);
 // <h2>{!text && <h3>Hello World</h3>} </h2>

  return (
    <>
      <h2>{text || 'john doe'}</h2>
      <button className='btn' onClick={()=>setiserror(!iserror)}>Toggle</button>
      {iserror && <h2>is error...</h2>}
      {iserror ? <p>terniary value true</p> :
      <p>terniary value false</p>}
    </>
  )
};

export default ShortCircuit;
