import React, {useState, useEffect} from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setsize] = useState(window.innerWidth);
  
  const checksize = () => {
    setsize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect'); 
    window.addEventListener('resize', checksize);  
    return (() => {  //we need to have a return fn in order to destroy the previous rendered values to clear up the memory. Usually we have a destroy fn in the 'return' that clear ups the prev values.  
      console.log('clean up');   // We only want latest rendered values to be present in our stack and that not all the values rendered till now.
      window.addEventListener('resize', checksize);  
    })
  })
  console.log('Render');

  return <>
    <h1>Window</h1>
    <h3>{ size}</h3>
  </>
};

export default UseEffectCleanup;
