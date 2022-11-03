import React, {useEffect, useState} from 'react';
import {jobsApi} from "../../services/jobsApi";
import {IJobsModel} from "../../models/jobs.model";
import JobCard from "./JobCard";
import {useLoadJobs} from "../../hooks/useLoadJobs";
import Paginator from "../../assets/Paginator";

const MainPage = () => {


    const jobs = useLoadJobs();


    return (
        <div className='bg-[#E6E9F2] '>
            <div className='flex flex-col items-center justify-items-center  '>
                {jobs.map((item: IJobsModel) =>
                    <JobCard key={item.id} id={item.id} name={item.name} address={item.address}
                             picture={item.pictures[1]} data={item.createdAt}/>
                )}

                <div className='mt-5 cursor-pointer'>
                    <Paginator/>
                </div>

            </div>


        </div>
    );
};

export default MainPage;