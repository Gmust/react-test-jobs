import React from 'react';
import {useNavigate} from "react-router-dom";


type TJobProps = {
    name: string,
    address: string,
    picture: string,
    id: string,
    data: string
}

const JobCard = ({id, address, picture, name, data}: TJobProps) => {

    const navigate = useNavigate();

    return (
        <div
            className='flex justify-between cursor-pointer bg-white max-h-36 h-36 hover:scale-110 duration-75  w-9/12 gap-32px px-4 py-4 rounded-md mt-5'
            onClick={()=> navigate(`/jobs/${id}`)}
        >
            <div className='flex '>
                <div className='justify-start'>
                    <img src={picture} alt='' className='h-20 w-20 rounded-full'/>
                </div>

                <div className='flex flex-col  justify-start ml-3'>
                    <h1 className='font-bold'>{name}</h1>
                    <div className='mt-2 inline-flex cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                        {address}
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between'>

                <div className='flex justify-end cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
                    </svg>
                </div>

                <span className='decoration-slate-50 text-xs '>
                    Created at: {data.slice(0, 10)}
                </span>
            </div>

        </div>
    );
};

export default JobCard;