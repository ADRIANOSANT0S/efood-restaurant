import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
