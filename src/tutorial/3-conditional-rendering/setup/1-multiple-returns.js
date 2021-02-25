import React, {useState, useEffect} from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isloading, setisloading] = useState(true);
  const [iserror, setiserror] = useState(false);
  const [user, setuser] = useState('default user');

  useEffect (() => {
    fetch(url).then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      }
      else {
        setisloading(false);
        setiserror(true);
      }
    },[])
      .then((user) => {
        const { login } = user;
        setuser(login);
        setisloading(false);
      })
      .catch((error)=>console.log(error)); //this catch is for network error and is NOT related to 'react'
  })

  if (isloading){
    return <div>
      <h2>Loading....</h2>
    </div>
  } 
  
  if (iserror){
    return <div>
      <h2>Error...</h2>
    </div>
  } 
  
  return (
    <div>                       
      <h2>{user}</h2>
    </div>
  )
};

export default MultipleReturns;
