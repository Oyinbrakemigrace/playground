import React, { useCallback, useState } from 'react'
import Header from '../components/Header'

const Random = () => {
    const[counter, setCounter]=useState(0)

    const fnToTest = useCallback(()=>{},[])

  return (
    <div className='p-5 space-y-4'>
        <Header fnToTest={fnToTest}/>
        <h1>Counter result : {counter} </h1>
        <button className='bg-slate-300 px-3 py-1' onClick={()=>setCounter(prev => prev + 1)}>Add</button>
        
    </div>
  )
}

export default Random


//useCallback is used to memoize a function accross rerenders.
//React.memo is used to memoize components but when a function is passed as a prop to that component, (React.memo does a shallow comparison of props)
//and the component mounts, React.memo will treat that prop function as a new value still causing the component to rerender
//even after wrapping it with React.memo. The solution to this is useCallback hook.