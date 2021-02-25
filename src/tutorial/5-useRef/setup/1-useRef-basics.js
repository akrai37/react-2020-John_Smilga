import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refcontainer = useRef(null);
  const divcontainer = useRef(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(refcontainer.current.value);
    console.log(divcontainer.current);
  }

  useEffect(() => {
    console.log(refcontainer.current);
    refcontainer.current.focus();
   }
  )
    
  return (
    <>
    <form className='form' onSubmit={handlesubmit}>
      <input type="text" ref={ refcontainer}/>
      <button type='submit'>submit</button>
    </form>
    <div>
      <h3>hello world</h3>
    </div>
    </>  
  )
}

export default UseRefBasics;
