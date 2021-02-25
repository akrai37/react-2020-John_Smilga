import React, { useState, useEffect } from 'react';
//'useEffect' is more like a 'sideEffect' of rendering.
// we cannot have conditional statements on hooks. However, we can use conditional statements inside hooks
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);
                              
  useEffect(() => {
    console.log('call use effect');
    if (value >= 1) {
      document.title = `new Message(${value})`;
    }
  }, [value]); //[value] is the dependency list. 'useEffect()' fn will only work/render according to the values present in the dependency list(if at all we are using it) 
  
  useEffect(() => {
    console.log('another useEffect');
  },[]) //this 'useEffect()' will render only once beacuse it's  dependecny list does not hae any values, it is empty.
  
  console.log('render component');
  return <>
    <h2>{value}</h2>
    <button className='btn' onClick={() => setvalue(value + 1)}>increase value</button>
  </>
}
  
export default UseEffectBasics;
