import { useState } from "react"

export const NikeComponent = (props) => {

    const [amount, setAmount] = useState(0);
    const [isFavorite, setIsFavorite] = useState(props.nike.favorite);

    const minusHandler = () => {
        if (amount == 0) return
        setAmount(amount - 1)
    }
    const plusHandler = () => {
        setAmount(amount + 1)
    }
    const addToCartHandler = () => {
        
    }

    const favHandler = () => {
        setIsFavorite((prev) => {
            return !prev
        })
    }

    return (
        <div className="blog-post">
            <div className={isFavorite ? "favorite plus" : "favorite"} onClick={favHandler}>
                <svg className="plus"  height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	            viewBox="0 0 455 455" xml:space="preserve">
                <path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.384-60.398-46.92-99.132-46.92
                C57.586,10.346,0,67.931,0,138.714c0,55.426,33.05,119.535,98.23,190.546c50.161,54.647,104.728,96.959,120.257,108.626l9.01,6.769
                l9.01-6.768c15.529-11.667,70.098-53.978,120.26-108.625C421.949,258.251,455,194.141,455,138.714
                C455,67.931,397.414,10.346,326.632,10.346z M334.666,308.974c-41.259,44.948-85.648,81.283-107.169,98.029
                c-21.52-16.746-65.907-53.082-107.166-98.03C61.236,244.592,30,185.717,30,138.714c0-54.24,44.128-98.368,98.368-98.368
                c35.694,0,68.652,19.454,86.013,50.771l13.119,23.666l13.119-23.666c17.36-31.316,50.318-50.771,86.013-50.771
                c54.24,0,98.368,44.127,98.368,98.368C425,185.719,393.763,244.594,334.666,308.974z"/>
                </svg>
            </div>
            <img src={props.nike.image} className="img"></img>
            <h4>{props.nike.producer}</h4>
            <h6>{props.nike.model}</h6>
            <p>{props.nike.available ? 'In stock' : 'Out of stock'}</p>
            <p>{props.nike.price} Eur</p>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="card-counter">
                    <button className="minus" onClick={minusHandler}>-</button>
                    <div className="amount">{amount}</div>
                    <button className="plus" onClick={plusHandler}>+</button>
                    
                </div>

                <button style={{margin: '0 5px 0 0'}} onClick={addToCartHandler}>ADD TO CART</button>
            </div>

            
        </div>
    )
}