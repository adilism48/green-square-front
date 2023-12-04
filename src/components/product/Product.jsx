import './product.css'
import Card from "../card/Card";
import cucumber from './../../img/cucumber.jpg'
import {useState} from "react";

const Product = () => {
    const [value, onClickCategory] = useState(0)

    return (
        <section className="product">
            <div className="product__header">
                <h2 className="title-2">Наша продукция</h2>
                <h4 className="product__header__text">Для заказа товара вам нужно связаться с нами по номеру</h4>
                <h2 className="title-2">+996 555 223344</h2>
                <h2 className="title-2">+996 777 223344</h2>
            </div>
            <div className="filter">
                <div className="container">
                    <div className="filter__items">
                        <ul className="items__list">
                            {['Все', 'Овощи', 'Фрукты', 'Разное'].map((itemName, i) => (
                                <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
                                    {itemName}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="product__cards">
                    <Card id="1" category="1" title="Cucumber" price="1250som/kg" img={cucumber} />
                    <Card id="2" category="1" title="Cucumber" price="12250som/kg" img={cucumber} />
                    <Card id="3" category="1" title="Cucumber" price="120som/kg" img={cucumber} />
                    <Card id="4" category="1" title="Cucumber" price="12som/kg" img={cucumber} />
                </div>
            </div>
        </section>
    )
}

export default Product