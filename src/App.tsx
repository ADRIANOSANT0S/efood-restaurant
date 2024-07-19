import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import Footer from './components/Footer'
import Rotas from './routes'
import Card from './components/Card'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
      <Card />
    </BrowserRouter>
  )
}

export default App
