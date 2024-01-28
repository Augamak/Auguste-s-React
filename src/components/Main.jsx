
import { useContext } from "react"
import { StoreContext } from "../App"
import { NikeComponent } from "./NikeComponent"


export const Main = () => {
    const { nikes } = useContext(StoreContext)

    return (
        <main>
            <h1 style={{textAlign: 'center'}}>
                Auguste's Cards
            </h1>
            <div className="cards">
                {
                  nikes.map(nike => {
                    return (<NikeComponent key={nike.model} nike={nike} />)
                })
                }
            </div>
        </main>    
    )
}