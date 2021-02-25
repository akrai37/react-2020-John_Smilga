import React, { useState } from 'react'
//JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
//onclick={ handlesubmit} could have been used on the submit button

const ControlledInputs = () => {
  const [firstname, setfirstname] = useState('random');
  const [email, setemail] = useState('random@gmail.com');
  const [people, setpeople]=useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (firstname && email) {
      const person={ id:new Date().getTime().toString(),firstname, email } //it should have been {anything:firstname, anything:email}
      console.log('person');
      setpeople(() => {
        return [...people, person]
      });
      setfirstname('');
      setemail('');
    }
    else {
      console.log('empty value');
    }
  };

  return (
    <>
      <article>
          <form className='form' onSubmit={handlesubmit}>
            <div className='form-control'>
                <label htmlFor='firstname'>Name:</label>
            <input type='text' id='firstname'
              name='firstname' value={firstname} onChange={ (e)=>setfirstname(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>email:</label>
                <input type='text' id='email'
                  name='email' value={email} onChange={ (e)=>setemail(e.target.value)} />
           </div>
          <button type='submit' >Add Person</button>
        </form>
        
        {
          people.map((human) => {
            const { id, firstname, email } = human;
            return (
              <div className='item' key={id}>
              <h4>{ firstname}</h4>
              <h4>{ email}</h4>
            </div>
            )
         })
        }
     </article>
    </>
  )
};

export default ControlledInputs;