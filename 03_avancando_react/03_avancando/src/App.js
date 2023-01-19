// Arquivo App.js
import './App.css';

// componentes.
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const userName = 'Daniel';
  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Vermelho', newCar: true, km: 0 },
    { id: 2, brand: 'Porsche', color: 'Azul escuro', newCar: true, km: 234 },
  ];
  return (
    <div className="App">
      <h1>Avancando em React</h1>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      <CarDetails brand="BMW" km={10423} color="Branco" newCar={true} />
      <CarDetails brand="AUDI" km={222200} color="Preto" newCar={false} />
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}
export default App;
