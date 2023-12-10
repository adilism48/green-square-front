import './product.css'
import Card from "../card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

import vegetables from '../../img/veg.jpg'
import fruits from '../../img/fru.jpg'
import other from '../../img/other.jpg'

const Product = () => {
    const [value, onClickCategory] = useState(0)
    const [allProducts, setProducts] = useState([])
    const images = [vegetables, fruits, other]

    useEffect(() => {
        axios.get(`http://localhost:5152/api/GreenSquare/GetProductsByCategory?category=${value}`).then(res => {
            setProducts(res.data)
        }).catch(err => {console.log(err)})
    }, [value])

    return (
        <section className="product">
            <div className="product__header">
                <h2 className="title-2">Наши продукты</h2>
                <h4 className="product__header__text">Чтобы заказать товар, вам необходимо связаться с нами по номеру телефона</h4>
                <h2 className="title-2">+996 555 223344</h2>
                <h2 className="title-2">+996 777 223344</h2>
            </div>
            <div className="filter">
                <div className="container">
                    <div className="filter__items">
                        <ul className="items__list">
                            {['Овощи', 'Фрукты', 'Другое'].map((itemName, i) => (
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
                    {
                        allProducts.map(x => (
                            <Card product={x} img={images[x.category]}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Product