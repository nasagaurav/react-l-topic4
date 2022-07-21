import React, { useState, useEffect } from 'react';
import axios from 'axios';

// crud
// create[post],read[get],update[patch/put],delete[delete]

export default function App() {
  const _nasa = (ob) => {
    let keys = Object.keys(ob);
    let values = Object.values(ob);
    let temp = [];
    for (let index in keys) {
      temp.push({
        id: keys[index],
        ...values[index],
      });
    }
    return temp;
  };

  const [a, seta] = useState([]);
  const [ob1, setob1] = useState({ name: '', email: '', gender: '' });
  const [ob2, setob2] = useState({ id: '', name: '', email: '', gender: '' });
  const handleChange1 = (e) => {
    console.log('ob1', e.target.placeholder, e.target.value); //insert/create/ob1
    setob1({ ...ob1, [e.target.placeholder]: e.target.value });
  };
  const handleChange2 = (e) => {
    console.log('ob2', e.target.placeholder, e.target.value); //edit/update/ob2
    setob2({ ...ob2, [e.target.placeholder]: e.target.value });
  };

  const _insert = () => {
    // post request
    const url = `https://my-project-1-22dd3-default-rtdb.firebaseio.com/users.json`;
    axios
      .post(url, ob1)
      .then((res) => res.data)
      .then((d) => {
        console.log('after insert', d);
      })
      .catch((e) => console.log('err insert:', e))
      .finally(() => {
        loadUsers();
      });
  };

  const _update = () => {
    const url = `https://my-project-1-22dd3-default-rtdb.firebaseio.com/users/${ob2.id}.json`;
    const data = {
      name: ob2.name,
      email: ob2.email,
      gender: ob2.gender,
    };
    axios
      .patch(url, data)
      .then((res) => res.data)
      .then((d) => {
        console.log('after update', d);
      })
      .catch((e) => console.log('err update:', e))
      .finally(() => {
        loadUsers();
      });
  };
  const _edit = (item) => {
    setob2(item);
  };
  const _delete = (id) => {
    console.log('deleing id', id);
    const url = `https://my-project-1-22dd3-default-rtdb.firebaseio.com/users/${id}.json`;
    axios
      .delete(url)
      .then((res) => res.data)
      .then((d) => {
        console.log('after update', d);
      })
      .catch((e) => console.log('err update:', e))
      .finally(() => {
        loadUsers();
      });
  };

  const loadUsers = () => {
    const url = `https://my-project-1-22dd3-default-rtdb.firebaseio.com/users.json`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((d) => _nasa(d))
      .then((d) => {
        console.log(d);
        seta(d);
      })
      .catch((e) => console.log('err', e))
      .finally(() => console.log('process completed: finally'));
  };

  useEffect(loadUsers, []);

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
          {a.map((item) => (
            <tr bgColor={item.gender === 'female' ? 'red' : 'white'}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>
                <button onClick={() => _edit(item)}>edit</button>
                <button onClick={() => _delete(item.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
