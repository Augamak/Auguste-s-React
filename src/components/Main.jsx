import { Shoes } from "./constants/ShoesData"
import { NikeComponent } from "./NikeComponent"

export const Main = () => {
    return (
        <main>
            <h1 style={{textAlign: 'center'}}>
                Auguste's Cards
            </h1>
            <div className="cards">
                {
                    Shoes.map(nike => {
                        return (
                            <NikeComponent
                                key={nike.model}
                                nike={nike}
                                
                            />
                        )
                    })
                }

            </div>
        </main>    
    )
}