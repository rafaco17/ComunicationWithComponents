import './App.css'
import Component1 from './components/Rxjs/Component1'
import Component2 from './components/Rxjs/Component2'
import Gentleman from './pages/Gentleman'
import { Provider } from 'react-redux'
import { GentlemanStore } from './redux/store'
import ComponentRedux1 from './components/Redux/ComponentRedux1'

// Redux usamos para compartir inforamción entre componentes de diferentes páginas (principalmente relacionado con entidades, ejm: carrito de compra de Amazon, este siempre esta presente a pesar que vallamos a cualquier página)
// Context usamos para compartir información entre componentes de una misma vista (la misma page) 
// Rxjs usamos para compatir información entre componentes pero para eventos muy simples

// Rxjs npm install rxjs

// Context solo importar useContext, createContext

// Redux npm install @reduxjs/toolkit, npm install react-redux 

function App() {
  return (
    <div>
      <Provider store={GentlemanStore}>
        <div>
          <h2>Comunicación con Rxjs</h2>
          <Component1 />
          <Component2 />
        </div>
        <div>
          <h2>Comunicacion con Context</h2>
          <Gentleman />
        </div>
        <div>
          <h2>Comunicacion con Redux</h2>
          <ComponentRedux1 />
        </div>
      </Provider>
    </div>
  )
}

export default App
