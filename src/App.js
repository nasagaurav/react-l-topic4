import React, { useState } from 'react';
import axios from 'axios';

// crud
// create[post],read[get],update[patch/put],delete[delete]

export default function App() {
  const [a, seta] = useState([]);
  const [ob1, setob1] = useState({ name: '', email: '', gender: '' });
  const [ob2, setob2] = useState({ id: '', name: '', email: '', gender: '' });
  const handleChange1 = (e) => {
    console.log('ob1', e.target.placeholder, e.target.value); //insert/create/ob1
  };
  const handleChange2 = (e) => {
    console.log('ob2', e.target.placeholder, e.target.value); //edit/update/ob2
  };

  const _insert = () => {
    // post request
    const url = `https://my-project-1-22dd3-default-rtdb.firebaseio.com/users.json`;
  };

  const _update = () => {
    const url = `https://my-project-1-22dd3-default-rtdb.firebaseio.com/users/{-N7TT_k_BbSLdHfwszx6 ?}.json`;
  };
  const _edit = () => {};
  const _delete = () => {};

  return (
    <div>
      <div>
        <h3>insert form</h3>
        <input placeholder="name" value={ob1.name} onChange={handleChange1} />
        <input placeholder="email" value={ob1.email} onChange={handleChange1} />
        <input
          placeholder="gender"
          value={ob1.gender}
          onChange={handleChange1}
        />
        <button onClick={_insert}>insert</button>
      </div>
      <div>
        <h3>update form</h3>
        <input placeholder="name" value={ob2.name} onChange={handleChange2} />
        <input placeholder="email" value={ob2.email} onChange={handleChange2} />
        <input
          placeholder="gender"
          value={ob2.gender}
          onChange={handleChange2}
        />
        <button onClick={_update}>update</button>
      </div>
      <h1>all users {a.length} </h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>gender</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>item.id</td>
            <td>item.name</td>
            <td>item.email</td>
            <td>item.gender</td>
            <td>
              <button onClick={_edit}>edit</button>
              <button onClick={_delete}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
