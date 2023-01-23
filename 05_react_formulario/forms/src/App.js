// Arquivo App.js

import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: 'Daniel',
          email: 'moscardinibdaniel@gmail.com',
          bio: 'Tentando programar',
          role: 'admin',
        }}
      />
    </div>
  );
}

export default App;
