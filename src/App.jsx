import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { createContext } from "react";
import { Footer } from "./components/Footer";
import { shoes } from "./components/constants/ShoesData"

const linksObj = []

export const StoreContext = createContext('')

export const App = () => {
  const [nikes, setNikes] = useState(shoes);
  const [cart, setCart] = useState(0)

  const ctxObject = {
    cart,
    setCart,
    nikes,
    setNikes,
    linksObj
  }

  return (
    <>
    <StoreContext.Provider value={ctxObject} >
      <Header />
      <Main /> 
    </StoreContext.Provider>
    <Footer />
    </>
  )
}


