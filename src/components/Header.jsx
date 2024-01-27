import { useContext } from "react";
import { Link } from "./Link";
import { StoreContext } from "../App";

export const Header = (props) => {
  const data = useContext(SomeContext)
  console.log(data)
    return (
        <header>
            <nav>
            {
              props.links.map(link => {
                return (
                  <Link 
                    key={link.name} 
                    name={link.name} 
                    link={link.link} 
                    />
                )
              })
            }
            </nav >
            <div className="cart">
              <img src="./src/img/cart.png" alt="cart" width={40}/>
              {props.cart} Eur
            </div>
        </header>
    )
}