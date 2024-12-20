import React from 'react'

function ProductRow({ product }) {
    return (
        <tr>
            <td className={`${product.stocked ? 'text-black' : 'text-red-500'}`}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow