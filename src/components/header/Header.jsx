import logoImg from '../../img/logo.svg'
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="logo"/>
                        <span>Зелёный Квадрат</span>
                    </div>
                    <a href="/login">Войти</a>
                </div>
            </div>
        </header>
    )
}

export default Header;