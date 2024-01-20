import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { linksObj } from "./components/constants/HeaderLinksData";
export const App = () => {

  return (
    <>
    <Header links={linksObj}/>
    <Main />
    <Footer />
    </>
  )
}

export default App
