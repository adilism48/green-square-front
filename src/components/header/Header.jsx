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
                    <a href="#!">Войти</a>
                </div>
            </div>
            <nav className="header__nav">
                <div className="container">
                    <ul>
                        <li><a href="#!">Овощи</a></li>
                        <li><a href="#!">Фрукты</a></li>
                        <li><a href="#!">Разное</a></li>
                        <li><a href="#!">О нас</a></li>
                        <li><a href="#!">Сотрудничество</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;