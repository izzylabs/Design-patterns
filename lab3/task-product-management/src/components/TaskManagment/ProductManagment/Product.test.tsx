import React from 'react';
import { render } from '@testing-library/react';
import ProductComponent from './Product';
import { Product } from '../../TaskManagment/ProductManagment/Product';

describe('ProductComponent', () => {
    it('renders product with correct information', () => {
        const product: Product = { getName: () => 'Product 1', getPrice: () => 1000 };
        const { getByText } = render(<ProductComponent product={product} />);

        expect(getByText('Product 1')).toBeInTheDocument();
        expect(getByText('Price: $1000')).toBeInTheDocument();
    });
});