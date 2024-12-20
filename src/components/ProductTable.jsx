import React from 'react'
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

function ProductTable({ products, searchQuery, isInStock }) {
    const rows = []
    let lastCategory = null;

    products.forEach(product => {
        if (
            product.name.toLowerCase().indexOf(
                searchQuery.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (isInStock && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} />
            )
        }
        rows.push(
            <ProductRow product={product} />
        )
        lastCategory = product.category
    });



    return (
        <table>
            <theadn>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </theadn>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default ProductTable