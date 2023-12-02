import './product.css'
import Card from "../card/Card";

const Product = () => {
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
                        <h3 className="title-3">Овощи</h3>
                        <h3 className="title-3">Фрукты</h3>
                        <h3 className="title-3">Разное</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="product__cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Product