import React, { useState } from 'react';
import { Product } from './Product';
import ProductComponent from './Product';
import { SortStrategy } from '../../../management/Strategies/PriceSortStrategy';
import { PriceSortStrategy } from '../../../management/Strategies/NameSortStrategy';
import { NameSortStrategy } from '../../../management/Strategies/PriceSortStrategy';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [sortStrategy, setSortStrategy] = useState<SortStrategy>(new PriceSortStrategy());

    const sortedProducts = sortStrategy.sort(products);

    return (
        <div className="container">
            <div className="sort-buttons">
                <button onClick={() => setSortStrategy(new PriceSortStrategy())}>Sort by Price</button>
                <button onClick={() => setSortStrategy(new NameSortStrategy())}>Sort by Name</button>
            </div>
            <div className="product-list">
                {sortedProducts.map((product, index) => (
                    <ProductComponent key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;