import {useEffect, useState} from "react";
import {jobsApi} from "../services/jobsApi";
import {IJobsModel} from "../models/jobs.model";


export const useLoadJobs = () => {

    const [jobs, setJobs] = useState<IJobsModel[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            const data = await jobsApi.getJobsList();
            setJobs(data?.data!)
        }

        fetchData().catch(console.error)

    }, [])


    return jobs;

}