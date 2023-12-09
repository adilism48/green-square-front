import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Promo from "./components/promo/Promo";
import Product from "./components/product/Product";
import Login from "./components/login/Login";
import Admin from "./components/admin/admin";
import Userfront from "@userfront/toolkit/react";

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
                    <Route path="/admin" element={
                        <RequireAuth>
                            <Admin/>
                        </RequireAuth>}/>
                </Routes>
            </Router>
        </div>
    );
}

const RequireAuth = ({children}) => {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
}

export default App;
