import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Glorfindel', 'Ecthelion', 'Turgon']);
  const [users, setUsers] = useState([
    { id: 1, name: 'Legolas' },
    { id: 2, name: 'Feanor' },
    { id: 3, name: 'Fingon' },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <p>Utilizando indice</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>Utilizando chave</p>
      <ul>
        {users.map((users) => (
          <li key={users.id}> {users.name} </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
