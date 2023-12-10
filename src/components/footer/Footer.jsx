import './footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="address">
                        <div className="footer__text">Наш адрес</div>
                        <div className="footer__text">с.Сокулук ул.Фрунзе 120</div>
                    </div>
                    <div className="contacts">
                        <div className="footer__text">Контакты</div>
                        <div className="footer__text">+996 555 223344 WhatsApp</div>
                        <div className="footer__text">+996 777 223344 </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer