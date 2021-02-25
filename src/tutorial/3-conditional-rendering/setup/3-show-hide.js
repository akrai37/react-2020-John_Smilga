import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isshow, setshow] = useState(false);
  return (
    <>
      <button className='btn' onClick={()=>setshow(!isshow)}>Show/hide</button>
      {isshow && <Item/>}
    </>
  )
}

const Item = () => {
  const [size, setsize] = useState(window.innerWidth);

  const checksize = () => {
    setsize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checksize);
    return () => {
        window.removeEventListener('resize',checksize);
     }
  },[])

  return (
       <>    
      <div style={{marginTop:'2rem'}}>
        <h2>window:</h2>
        <h2>size:{ size} px</h2>
      </div>
      </> 
  )
}

export default ShowHide;
