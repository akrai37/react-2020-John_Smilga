import React , { useState} from 'react';

const UserStateBasics = () => {

  // console.log(useState('Hello World')) 
  // const value = useState()[0]
  // const handler = useState()[1]
  // console.log(value, handler);
  const [text, settext] = useState('Hello World')

  const handleclick = () => {
    if (text === 'Hello World') {
      settext('Changing Title');
    }
    else {
      settext('Hello World');
    }
  }
    return (
      <React.Fragment>
        <h2>{text}</h2>
        <button className='btn' onClick={handleclick}>Change Title</button>
      </React.Fragment>
    );
};

export default UserStateBasics
