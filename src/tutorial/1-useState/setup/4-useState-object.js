import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setperson] = useState({
    name: 'jason',
    age: '24',
    message:'random message'
  })
  const changeMessage = () => {
    setperson({ ...person, message: 'hello world' });
  }

  return (
    <>
    <h4>{person.name}</h4>
    <h4>{person.age}</h4>
    <h4>{person.message}</h4>
    <button className='btn' onClick={changeMessage}>Change Message</button>  
    </>
  );
}

export default UseStateObject;
