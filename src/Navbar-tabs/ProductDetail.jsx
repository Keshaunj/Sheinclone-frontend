import React from "react";
import { useParams } from "react-router-dom";
import {products} from "../data/products"

//Get the dymanic :id from URL
function ProductDetail() {
    const{id} = useParams();


// Find the product by id
const product = products.find((p) => p.id.toString() === id);

//Handle case where product is not found
if(!product) {
    return <div>Product not found.</div>;
}

return (
    <div style={{padding: "20px"}}>
        <h2> {product.name}</h2>
        <img src={product.image} alt={product.name} style={{width: "200px"}} />
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
    </div>
);
}
export default ProductDetail;