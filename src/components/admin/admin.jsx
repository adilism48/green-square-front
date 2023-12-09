import './admin.css'
import ModalButton from "./ModalBtn";
import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Admin = () => {
    const [allProducts, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5152/api/GreenSquare/GetProducts').then(res => {
            setProducts(res.data)
        }).catch(err => {console.log(err)})
    }, [])

return (
        <div className="admin">
            <div className="container">
                <h2 className="admin-title">Title</h2>
                <div className="add-product">
                    <div className="admin-row">
                        <div>
                            <label className="admin-input-label" htmlFor="name">Name:</label>
                            <input className="admin-input" id="name" name="name" type="text"/>
                        </div>
                        <div>
                            <label className="admin-input-label" htmlFor="price">Price:</label>
                            <input className="admin-input" id="price" name="price" type="text"/>
                        </div>
                    </div>
                    <div className="admin-row">
                        <select className="categories" name="categories" id="categories">
                            <option value="0">All</option>
                            <option value="1">Vegetables</option>
                            <option value="2">Fruits</option>
                            <option value="3">Else</option>
                        </select>
                        <div>add photo</div>
                    </div>
                    <button className="add-btn">Add</button>
                </div>
                <h2 className="admin-title">Product List</h2>
                <div className="product__list">
                    {
                        allProducts.map(x => (
                            <ProductItem product={x} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Admin

const ProductItem = ({product, deleteAction, updateAction}) => {
    return (
        <div className="product__item">
            <div className="item_photo">photo</div>
            <div className="item__id">{product.id}</div>
            <div className="item__name">{product.product_name}</div>
            <div className="item__price">{product.price}</div>
            <div className="list-btns">
                <ModalButton
                    btnName={"Update"}
                    title={"Update post"}
                    modalContent={
                        <div>
                            Modal
                        </div>
                    }
                />
                <Button variant="danger">Delete</Button>
            </div>
        </div>
    )
}