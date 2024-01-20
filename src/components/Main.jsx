import { Cards } from "./constants/Cards"
import { BlogPost } from "./BlogPosts"

export const Main = () => {
    return (
        <main>
            <h1 style={{textAlign: 'center'}}>Auguste's Cards</h1>
            <div className="blocks">
                {
                    Cards.map(blogPost => {
                        return (
                            <BlogPost
                                key={blogPost.title}
                                title={blogPost.title}
                                subtitle={blogPost.subtitle}
                                image={blogPost.image}
                                text={blogPost.text}
                                button={blogPost.buttonText}
                            />
                        )
                    })
                }

            </div>
        </main>    
    )
}