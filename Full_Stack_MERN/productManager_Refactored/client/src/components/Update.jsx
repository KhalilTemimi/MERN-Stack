import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import DeleteButttom from "./DeleteButton";

const Update = (props) => {
    const { id } = useParams(); 
    const [oneProduct, setOneProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setOneProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = productParam => {
        axios.put('http://localhost:8000/api/product/' + id, productParam)
            .then(res => {
                console.log(res);
                navigate("/product");
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {
                loaded && (
                    <>
                    <ProductForm onSubmitProp = {updateProduct}
                    initialTitle = {oneProduct.title}
                    initialPrice = {oneProduct.price}
                    initialDescription = {oneProduct.description}/>
                    <DeleteButttom productId = {oneProduct._id}
                    successCallback = {()=>navigate("/product")}/>
                    </>
                )
            }
        </div>
    )
}
export default Update;