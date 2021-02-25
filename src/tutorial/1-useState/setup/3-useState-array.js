import React from 'react';
import {data} from 'C:/Users/Ankush/Desktop/react-advanced-2020/src/data.js'

const UserStateArray = () => {
  const [people, setpeople] = React.useState(data);
  const removeitem = (id) => {
    let newpeople = people.filter((person) => person.id !== id);
    setpeople(newpeople);
  }
  return (
    <>
      {
        people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={()=>removeitem(id)}>remove</button>
          </div>
          )
        }
        )//end of map
      }
     <button className='btn' onClick={() => setpeople([])}>remove all</button>
    </>
  )//end of return
}

export default UserStateArray;
