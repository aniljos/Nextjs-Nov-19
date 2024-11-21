import { Product } from "@/model/Product";
import styles from './page.module.css';
import React from "react";

type ProductViewProps = {
    product: Product,
    onDelete?: (product: Product)=> void,
    onEdit?: (product: Product)=> void
}

// <ProductView product={product}/>
function ProductView(props: ProductViewProps){

    const {product, onDelete, onEdit} = props;
    console.log("rendering product-view", product.id);

    
    return (
        <div key={product.id} className={styles.product}>
        <p>Id: {product.id}</p>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <div>
            <button className="btn btn-warning" onClick={() => onDelete!(product)}>Delete</button>&nbsp;
            <button className="btn btn-info" onClick={() => onEdit!(product)}>Edit</button>
        </div>
    </div>
    )
}

export default React.memo(ProductView);