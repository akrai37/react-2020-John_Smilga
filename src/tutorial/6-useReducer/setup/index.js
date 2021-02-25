import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer'
// reducer function

const defaultState={
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
}

const Index = () => {
  const [name, setname] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({type:'ADD_ITEM', payload:newItem});
    } else {
      dispatch({type:'NO_VALUE'});
    }
  } 

   const closeModal = () => {
      dispatch({type: 'CLOSE_MODAL'});
  }
  
  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/> }
      
      <form className='form' onSubmit={handlesubmit}>
        <div>
          <input type='text' value={name} onChange={ (e)=>setname(e.target.value)}/>
        </div>
        <button type='submit'>add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={()=>dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>remove</button>
          </div>
        )
      })}
    </>
  )
}

export default Index;
