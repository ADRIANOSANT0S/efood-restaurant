import { GlobalStyles } from './GlobalStyles'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header isHome={false} />;
      <Footer />
    </>
  )
}

export default App
