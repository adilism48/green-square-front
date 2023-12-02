import './card.css'

const Card = ({title, price, img}) => {
    return (
        <div className="card">
            <img className="card__img" src={img} alt={title}/>
            <div className="card__body">
                <div className="card__title">{title}</div>
                <div className="card__price">{price}</div>
            </div>
        </div>
    )
}

export default Card