import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Glorfindel', 'Ecthelion', 'Turgon']);
  const [secondList] = useState([
    { id: 1, name: 'Legolas' },
    { id: 2, name: 'Feanor' },
    { id: 3, name: 'Fingon' },
  ]);

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
        {secondList.map((secondList) => (
          <li key={secondList.id}> {secondList.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
