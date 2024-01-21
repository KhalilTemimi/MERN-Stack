import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';
const ProductList = (props) => {
   
    // const {product, setProduct} = props;
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);
    const removeFromDom = productId =>{
        setProduct(product.filter(product => product._id !== productId))
    }
    
    return (
         <div>
            {
                product.map((product, index)=>{
                return (
                    <div key={index}>
                        <p>{product.title} : {product.price} $</p>
                        <Link to={`/product/${product._id}`}>Details</Link>
                        <Link to={'/product/edit/'+ product._id} >Edit</Link>
                        <DeleteButton productId={product._id}
                        successCallback={()=> removeFromDom(product._id)}/>
                    </div> 
                )})
            }
        </div>
    );
}
export default ProductList;