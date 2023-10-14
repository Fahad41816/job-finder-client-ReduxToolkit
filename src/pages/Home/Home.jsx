import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import SingleJob from '../../components/SingleJob/SingleJob';
import Filter from '../../components/Filter/Filter';
import {useSelector, useDispatch} from "react-redux"
import { AllJobs } from '../../features/jobs/JobsSlice';

const Home = () => {

    const dispatch = useDispatch()
    const {jobs} = useSelector((state)=> state.jobsReducer)

    const[search, setsearch] = useState("")
    const[Type, settype] = useState("")
    const[salaryfilter, setsalaryfilter] = useState("")
    
    

    useEffect(()=>{
        dispatch(AllJobs())
    },[dispatch])

    const FilterHandler = (e) => {
        setsearch(e.target.value)
    }

    const sidebarfilter = (action) => {
        console.log(action)
        settype(action)
    }

    const salaryFilter = (e) => {
        console.log(e.target.value)
        setsalaryfilter(e.target.value)

    }

 

    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                        <Sidebar sidebarfilter={sidebarfilter}/>
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                        <Filter  salaryFilter={salaryFilter} filterHandler={FilterHandler}/>
                <div className="jobs-list">
                    {/* <!-- Single Job 1--> */}
                    {
                        jobs.filter((job) => job.title.toLowerCase().includes(search.toLowerCase())).filter((job) => job.type.toLowerCase().includes(Type.toLowerCase())).sort((a , b) => {
                            if(salaryfilter === "LowToHigh"){                                
                                return a.salary - b.salary
                            }else if(salaryfilter === "HighToLow"){
                                return a.salary + b.salary
                            }else{
                                return true
                            }
                        }).map((job)=>(
                            <SingleJob key={job.id} job={job}/>
                        ))
                    }
                    {/* <!-- Single Job 1--> */}
                </div>
            </main>
        </div>
    </div>
    );
};

export default Home;