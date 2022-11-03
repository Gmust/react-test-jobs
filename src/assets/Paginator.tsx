import React from 'react';
import {useLoadJobs} from "../hooks/useLoadJobs";

const Paginator = () => {

    const jobs = useLoadJobs();
    const limit = 4;
    const pageCount = Math.ceil(jobs.length / limit);
    const pages = [];
    for(let i=0; i<pageCount; i++){
        pages.push(i+1)
    }

    return (
        <div className='inline-flex -space-x-px'>
            {pages.map(p => <div key={p} className='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                {p}
            </div>)}
        </div>
    );
};

export default Paginator;