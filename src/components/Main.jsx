import { Cards } from "./constants/Cards"
import { BlogPost } from "./BlogPost"

export const Main = () => {
    return (
        <main>
            <h1 style={{textAlign: 'center'}}>Auguste's Cards</h1>
            <div className="blocks">
                {
                    Cards.map(blogPost => {
                        return (
                            <BlogPost
                                image={blogPost.image}
                                key={blogPost.producer}
                                producer={blogPost.producer}
                                model={blogPost.model}
                                available={blogPost.available}
                                price={blogPost.price}
                            />
                        )
                    })
                }

            </div>
        </main>    
    )
}