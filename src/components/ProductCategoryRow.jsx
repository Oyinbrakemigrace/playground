import React from 'react'

function ProductCategoryRow({ category }) {
  return (
    <tr>
          <th colSpan="2" className='text-center font-semibold text-base'>
        {category}
    </th>
    </tr>
  )
}

export default ProductCategoryRow