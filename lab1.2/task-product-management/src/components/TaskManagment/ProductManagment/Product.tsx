import React from 'react';
import { Product } from '../../../management/Models/Product';

interface ProductProps {
    product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="product-item">
            <h3>{product.getName()}</h3>
            <p>Price: ${product.getPrice()}</p>
        </div>
    );
};

export default ProductComponent;