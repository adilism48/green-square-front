import './promo.css'
import promoImg from '../../img/photo.png'

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            Green Square is
                            online catalog
                            vegetables and fruits
                        </div>
                        <div className="promo__small-title">
                            Which you can order from us
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="promoImg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;