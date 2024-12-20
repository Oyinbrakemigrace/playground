import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableProductTable({ products }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [isInStock, setIsInStock] = useState(false)
    const [text, setText] = useState('')
    const[status,setStatus] = useState('typing...')


    const sendText = (message) =>{
        return new Promise((resolve) => setTimeout(resolve, 2000))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setStatus("sending...")
        await sendText(text)
        setStatus('Sent!')
    }

    const isSent = status === 'Sent!'




    return (
        <div className='space-y-6'>
            {/* <SearchBar searchQuery={searchQuery} isInStock={isInStock} setIsInStock={setIsInStock} setSearchQuery={setSearchQuery}/>
            <ProductTable products={products} searchQuery={searchQuery} isInStock={isInStock} />
            <div>
               {
                isSent ? <h1 className='font-extrabold text-6xl text-green-800'>Feedback Sent!</h1> :
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col'>
                                <label htmlFor="">How was your stay at this hotel?</label>
                                <textarea className='p-3' value={text} onChange={(e) => setText(e.target.value)} rows={5} cols={5}></textarea>
                            </div>
                            {
                                text.length > 0 && <p className='italic text-gray-500 text-sm font-bold'>{status}</p>
                            }
                            <button disabled={status==='sending...'} className='bg-green-700 px-4 py-1 rounded-md text-slate-200 my-5' type='submit'>Send feedback</button>
                        </form>
               }
                
            </div> */}
        </div>
    )
}

export default FilterableProductTable