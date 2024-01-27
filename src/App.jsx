import { createContext, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { shoes } from "./components/constants/ShoesData"

const linksObj = []

export const StoreContext = createContext('')

export const App = () => {
  const [nikes, setNikes] = useState(shoes);
  const [cart, setCart] = useState(0)

  return (
    <>
    <StoreContext.Provider value={name: 'Gosha'}>
      <Header links={linksObj} cart={cart}/>
      <Main nikes={nikes} setNikes={setNikes} setCart={setCart}/>
      <Footer />
    </StoreContext.Provider>
    </>
  )
}

export default App
