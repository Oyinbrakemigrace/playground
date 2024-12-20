import React, { useEffect, useRef, useState } from "react";
import JobCard from "../components/JobCard";

function Home() {
  const PAGE_SIZE = 6;
  const [jobIds, setJobIds] = useState(null);
  const[jobs, setJobs]=useState([])
  const[pageNum, setPageNum]=useState(0)
  const[isLoading, setIsLoading] = useState(false)
  const isMounted = useRef(true)

  useEffect(()=>{
    isMounted.current= true
    return()=>{
      isMounted.current = false
    }
  },[])


  const fetchJobIds = async (currentPage)=>{
    let ids = jobIds
    if(!ids){
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      ids = await response.json()
    }
    if(!isMounted){
      return;
    }
    setJobIds(ids);

    const start = currentPage * PAGE_SIZE
    const end = start + PAGE_SIZE
    //console.log(ids.slice(start, end));
    return ids.slice(start,end)
  }

  const fetchJobDetails = async (currentPage)=>{
    const allJobsIds = await fetchJobIds(currentPage)
    setIsLoading(true)
    const allJobs = await Promise.all(
      allJobsIds.map((id)=>{
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res)=>res.json())
      })
    )
    setIsLoading(false)
    if(!isMounted){
      return;
    }
    setJobs([...jobs, ...allJobs])
  }

  useEffect(()=>{
    fetchJobDetails(pageNum)
  },[pageNum])
  

  return (
    <div className="bg-slate-200 min-h-screen">
      <h1 className="text-center font-bold text-5xl text-orange-500 py-10">
        Hacker News Job board
      </h1>
      {jobIds === null ? (
        <p className="mt-10 text-center text-3xl text-zinc-500 font-bold">Loading</p>
      ) : (
        <div>
          {jobs.map((job) => {
            return <JobCard key={job.id} {...job} />;
          })}
        </div>
      )}
      {jobs.length > 0 && pageNum * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
        <button
          disabled={isLoading}
          onClick={() => setPageNum(pageNum + 1)}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg block m-auto"
        >
          {isLoading ? "Loading jobs..." : "Load more"}
        </button>
      )}
    </div>
  );
}

export default Home;
