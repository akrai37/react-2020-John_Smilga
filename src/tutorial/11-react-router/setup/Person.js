import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();
  useEffect(() => {
    const newperson = data.find((person) => person.id === parseInt(id))
    setName(newperson.name);
    console.log(newperson);
  },[])
  return (
    <div>
      <h2>{ name}</h2>
      <Link to='/People' className='btn'>Back to People page</Link>
    </div>
  );
};

export default Person;
