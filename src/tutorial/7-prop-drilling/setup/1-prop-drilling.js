import React, { useState } from 'react';
import { data } from '../../../data';
// PropDrilling means passing a function into an inheritant fn but we can only pass it through the parent fn.
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setpeople] = useState(data)
  const removeperson = (id) => {
    setpeople(() => {
      return people.filter((person) => person.id !== id);
    })
  }
  return (
    <section>
      <List people={people} removeperson={ removeperson}/>
    </section>
  )
}

const List = ({people,removeperson}) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Singleperson key={person.id} {...person} removeperson={ removeperson}/>
        )
      })}
   </>
  )
}

const Singleperson = ({id,name,removeperson}) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() =>removeperson(id)}>remove</button>
    </div>
  )
}
                             
export default PropDrilling;
