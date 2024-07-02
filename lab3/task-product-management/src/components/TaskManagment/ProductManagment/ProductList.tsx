import React, { useState } from 'react';
import { Product } from '../../../management/Models/Product';
import ProductComponent from './Product';
import { SortStrategy } from '../../../management/Strategies/PriceSortStrategy';
import { PriceSortStrategy } from '../../../management/Strategies/PriceSortStrategy';
import { NameSortStrategy } from '../../../management/Strategies/NameSortStrategy';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [sortStrategy, setSortStrategy] = useState<SortStrategy>(new PriceSortStrategy());
    const [searchTerm, setSearchTerm] = useState('');

    const sortedProducts = sortStrategy.sort(products).filter(product => 
        product.getName().toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>
            <div className="sort-buttons">
                <button onClick={() => setSortStrategy(new PriceSortStrategy())}>Sort by Price</button>
                <button onClick={() => setSortStrategy(new NameSortStrategy())}>Sort by Name</button>
            </div>
            <div className="sort-feedback">
                Currently sorting by: {sortStrategy instanceof PriceSortStrategy ? 'Price' : 'Name'}
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