import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setage] = useState('');
  const [person, setperson] = useState({firstName:'',email:'',age:''});
  const [people, setPeople] = useState([]);
  
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setperson({...person, [name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newperson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newperson])
      setperson({firstName:'',email:'',age:'' })
    }
  }
                       
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handlechange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handlechange}
            />
          </div>
           <div className='form-control'>
            <label htmlFor='Age'>Age: </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handlechange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>add person</button>
        </form>

        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
              <h4>{age}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
