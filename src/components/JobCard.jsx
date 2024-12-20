import React from 'react'

const JobCard = ({ title, by, url, time }) => {
    return (
        <div className='p-5'>
            <div className='border bg-slate-50 p-3 text-start rounded-md'>
                <div className='font-semibold text-3xl hover:underline'>
                    {
                        url ? <a href={url} target='_blank'>{title}</a> : <h1>{title}</h1>
                    }
                </div>
                <div className='text-zinc-500 mt-2'>
                    By {by} &middot; {new Date(time * 1000).toLocaleString()}
                </div>
            </div>
        </div>
    )
}

export default JobCard