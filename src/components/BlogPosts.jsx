export const BlogPost = (props) => {
    return (
        <div className="blog-post">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <img src={props.image} className="img"></img>
            <p>{props.text}</p>
            <button>{props.button}</button>
        </div>
    )
}