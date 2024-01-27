
import { NikeComponent } from "./NikeComponent"

export const Main = ({nikes, setNikes, setCart}) => {
    return (
        <main>
            <h1 style={{textAlign: 'center'}}>
                Auguste's Cards
            </h1>
            <div className="cards">
                {
                    nikes.map(nike => {
                        return (
                            <NikeComponent
                                setNikes={setNikes}
                                key={nike.model}
                                nike={nike}
                                setCart={setCart}
                                
                            />
                        )
                    })
                }

            </div>
        </main>    
    )
}