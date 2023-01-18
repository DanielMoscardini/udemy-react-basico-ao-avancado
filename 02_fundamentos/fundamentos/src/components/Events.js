const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderizando isso também!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>

      <div>
        <button onClick={() => console.log('Clicou!')}>
          Clique aqui também!
        </button>
      </div>
      {renderSomething(1)}
    </div>
  );
};

export default Events;
