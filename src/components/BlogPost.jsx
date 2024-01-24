export const BlogPost = (props) => {
    return (
        <div className="blog-post">
            <img src={props.image} className="img"></img>
            <h4>{props.producer}</h4>
            <h6>{props.model}</h6>
            <p>{props.available ? 'In stock' : 'Out of stock'}</p>
            <p>{props.price} Eur</p>
        </div>
    )
}