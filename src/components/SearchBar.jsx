import React from 'react'

function SearchBar({ searchQuery, isInStock, setIsInStock, setSearchQuery }) {
    return (
        <form className='space-y-3'>
            <div>
                <input type="text" placeholder='Search...' className='border' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className='space-x-1'>
                <input type="checkbox" checked={isInStock} onChange={(e) => setIsInStock(e.target.checked)} />
                <label htmlFor="">Only show products in stock</label>
            </div>
        </form>
    )
}

export default SearchBar