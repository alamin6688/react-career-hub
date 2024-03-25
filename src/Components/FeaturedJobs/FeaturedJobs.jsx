import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // Show All Data
    const [dataLength, setDataLength] = useState(4);
 

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])


    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl text-center">
                    Featured Jobs: {jobs.length}
                </h2>
                <p className="text-center mt-4 mb-8 w-full md:w-2/3 mx-auto">
                    Explore thousands of job opportunities with all the information you need. Its your future.
                </p>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button 
                    onClick={()=> setDataLength(jobs.length)}
                    className="btn btn-primary">Show all jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;