import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Promo from "./components/promo/Promo";
import Product from "./components/product/Product";
import Login from "./components/login/Login";
import Admin from "./components/admin/admin";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Promo/>
                            <Product/>
                            <Footer/>
                        </>
                    }
                    />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
