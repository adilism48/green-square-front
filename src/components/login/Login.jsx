import './login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <input className="login-field" type="text" placeholder="Логин" name="uname" required/>
                    <input className="login-field" type="password" placeholder="Пароль" name="psw" required/>
                    <button className="login-btn" type="submit">Войти</button>
                </div>
            </div>
        </div>
    )
}

export default Login