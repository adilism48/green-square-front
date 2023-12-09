import './admin.css'
import ModalButton from "./ModalBtn";
import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Admin = () => {
    const [allProducts, setProducts] = useState([])

    const getProduct = async () => {
        axios.get('http://localhost:5152/api/GreenSquare/GetProducts').then(res => {
            setProducts(res.data)
        }).catch(err => {console.log(err)})
    }

    const addProduct = async () => {
        let categoryFromAdmin = document.querySelector("#categories").value
        let productNameFromAdmin = document.querySelector("#name").value
        let priceFromAdmin = document.querySelector("#price").value

        //event.preventDefault();

        let adminData = {
            category: categoryFromAdmin,
            product_name: productNameFromAdmin,
            price: priceFromAdmin
        }

        axios({
            method: "post",
            url: "http://localhost:5152/api/GreenSquare/AddProduct",
            data: adminData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                getProduct()
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    const deleteProduct = async (id) => {
        axios({
            method: "delete",
            url: "http://localhost:5152/api/GreenSquare/DeleteProduct",
            data: {id},
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                getProduct()
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    const updateProduct = async (oldProduct) => {
        let oldProductData = {
            category: oldProduct.category,
            product_name: oldProduct.product_name,
            price: oldProduct.price
        }

        await axios({
            method: "patch",
            url: `http://localhost:5152/api/GreenSquare/UpdateProduct?id=${oldProduct.id}`,
            data: oldProductData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                getProduct()
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    useEffect(() => {
        getProduct()
    }, [])

return (
        <div className="admin">
            <div className="container">
                <h2 className="admin-title">Add new product</h2>
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
                            <option value="0">Vegetables</option>
                            <option value="1">Fruits</option>
                            <option value="2">Else</option>
                        </select>
                        <div>add photo</div>
                    </div>
                    <button className="add-btn" onClick={() => addProduct()}>Add</button>
                </div>
                <h2 className="admin-title">Product List</h2>
                <div className="product__list">
                    {
                        allProducts.map(x => (
                            <ProductItem product={x} deleteAction={deleteProduct} updateAction={updateProduct} />
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
            <div className="item__category">{product.category}</div>
            <div className="item__price">{product.price}</div>
            <div className="list-btns">
                <ModalButton
                    btnName={"Update"}
                    title={"Update product"}
                    modalContent={
                        <div>
                            <div>
                                <label className="admin-input-label" htmlFor="name">Name:</label>
                                <input className="admin-input-line" id="new-name" name="name" type="text" defaultValue={product.product_name} onChange={
                                    e => product.product_name = e.target.value
                                }/>
                            </div>
                            <div>
                                <label className="admin-input-label" htmlFor="price">Price:</label>
                                <input className="admin-input-line" id="new-price" name="price" type="text" defaultValue={product.price} onChange={
                                    e => product.price = e.target.value
                                }/>
                            </div>
                            <select className="categories-in-modal" name="new-categories" id="categories" defaultValue={product.category} onChange={
                                e => product.category = e.target.value
                            }>
                                <option value="0">Vegetables</option>
                                <option value="1">Fruits</option>
                                <option value="2">Else</option>
                            </select>
                            <Button variant="primary" onClick={() => updateAction(product)}>Update</Button>
                        </div>

                    }
                />
                <Button variant="danger" onClick={() => deleteAction(product.id)}>Delete</Button>
            </div>
        </div>
    )
}