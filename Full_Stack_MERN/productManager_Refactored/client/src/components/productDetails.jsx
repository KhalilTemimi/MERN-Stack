import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link,useParams} from "react-router-dom";

const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price} $</p>
            <p>Description : {product.description}</p>
            {/* <button onClick={(e)=>{deleteProduct()}} >Delete</button> */}
            <Link to={'/product'}>Back Home</Link>
        </div>
    );
}
export default ProductDetails;