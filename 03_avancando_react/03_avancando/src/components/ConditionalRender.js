import React, { useState } from 'react';

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name] = useState('Finwe');

  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {name === 'Finwe' ? 'nome é finwe' : 'nome nao é finwe'}
    </div>
  );
};

export default ConditionalRender;
