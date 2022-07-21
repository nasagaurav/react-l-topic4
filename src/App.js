import React from 'react';
import axios from 'axios';
const url = 'https://my-project-1-22dd3-default-rtdb.firebaseio.com/users.json';
export default function App() {
  const handleClick = () => {
    const data={
      name:"demo2",
      email:"demo2@gmail.com",
      gender:"female",

    }
    axios
      .post(url, data)
      .then((res) => res.data)
      .then((d) => console.log('after adding', d))
      .catch((e) => console.log('after error', e))
      .finally(() => console.log('finally'));
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleClick}>post request</button>
    </div>
  );
}
