import './App.css';

// componentes.
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <h1>Avancando em React</h1>

      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
