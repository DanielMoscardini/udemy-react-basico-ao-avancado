import './App.css';

import Img_Assets from './assets/img_assets.jpg';

// componentes.
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avancando em React</h1>

      {/* Imagens. */}
      <div>
        {/* 
        Imagem em public. 
        <img
          height="400px"
          width="400px"
          src="/img_public.jpg"
          alt="img public"
        />
      </div>

      <div>
        Imagem em asset. 
        <img height="400px" width="400px" src={Img_Assets} alt="img asset" />
       */}
      </div>

      <ManageData />
    </div>
  );
}

export default App;
