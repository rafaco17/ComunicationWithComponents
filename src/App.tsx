import './App.css'
import Component1 from './components/Rxjs/Component1'
import Component2 from './components/Rxjs/Component2'
import Gentleman from './pages/Gentleman'

// Redux usamos para compartir inforamción entre componentes de diferentes páginas (principalmente relacionado con entidades, ejm: carrito de compra de Amazon, este siempre esta presente a pesar que vallamos a cualquier página)
// Context usamos para compartir información entre componentes de una misma vista (la misma page) 
// Rxjs usamos para compatir información entre componentes pero para eventos muy simples

// Rxjs npm install rxjs

function App() {
  return (
    <div>
      <div>
        <h2>Comunicación con Rxjs</h2>
        <Component1 />
        <Component2 />
      </div>
      <div>
        <h2>Comunicacion con Context</h2>
        <Gentleman />
      </div>
    </div>
  )
}

export default App
