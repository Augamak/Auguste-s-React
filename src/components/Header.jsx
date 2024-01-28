import { useContext } from "react";
import { StoreContext } from "../App";
import { Link } from "./Link";


export const Header = () => {
  const { linksObj, cart } = useContext(StoreContext)
  return (
      <header>
        <nav>
          {
            linksObj.map(link => {
              return (
                <Link 
                  key={link.name} 
                  name={link.name} 
                  link={link.link} 
                  />
              )
            })
          }
          
          <div className="cart">
            <img src="./src/img/cart.png" alt="cart" width={40}/>
            {cart} Eur
          </div>
        </nav >
      </header>
    )
}