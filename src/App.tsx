import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './GlobalStyles'

import Footer from './components/Footer'
import Rotas from './routes'
import Card from './components/Cart'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
        <Card />
      </BrowserRouter>
    </Provider>
  )
}

export default App
