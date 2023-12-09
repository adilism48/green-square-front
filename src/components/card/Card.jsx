import './card.css'

const Card = ({product, img}) => {
    return (
        <div className="product-card">
            <img className="card__img" src={img} alt={product.product_name}/>
            <div className="card__body">
                <div className="card__title">{product.product_name}</div>
                <div className="card__price">{product.price}</div>
            </div>
        </div>
    )
}

export default Card