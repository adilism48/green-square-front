import './card.css'
import cucumber from './../../img/cucumber.jpg'

const Card = () => {
    return (
        <div className="card">
            <img className="card__img" src={cucumber} alt="cucumber"/>
            <div className="card__body">
                <div className="card__title">Cucumber</div>
                <div className="card__price">1250com/kg</div>
            </div>
        </div>
    )
}

export default Card