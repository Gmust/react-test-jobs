import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useLoadJobs} from "../../hooks/useLoadJobs";
import Header from "./Header";
import ApplyBtn from "./ApplyBtn";
import MainJobInfo from "./MainJobInfo";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import AttachedImgs from "./AttachedImgs";
import MapDisplay from "./MapDisplay";
import {useWindowDimensions} from "../../hooks/useWindowDimension";

const DetailedPage = () => {

    const [currentJob, setCurrentJob] = useState<any>()

    const {id} = useParams();
    const jobs = useLoadJobs();
    const navigate = useNavigate();

    const {width}  = useWindowDimensions()

    useEffect(() => {
        let currentJob = jobs.find((obj: any) => obj.id === id)
        setCurrentJob(currentJob);
    }, [id, jobs])

    return (
        <>
            {width >1300?
                <div className='absolute right-0 '>
                    <MapDisplay name={currentJob?.name!} address={currentJob?.address!} email={currentJob?.email!} phone={currentJob?.phone!}/>
                </div>
                :
                ''
            }


            <div className='flex flex-col items-center mt-20'>

                <div className='flex justify-between w-2/5'>
                    <Header/>
                </div>
                <hr className='mt-1 w-2/5'/>

                <div className='flex flex-start w-2/5'>
                    <ApplyBtn/>
                </div>

                <div className='flex w-2/5 justify-between mt-4'>
                    <MainJobInfo name={currentJob?.name!} salary={currentJob?.salary!}/>
                </div>

                <div className='w-2/5 mt-10'>
                    <Description title={currentJob?.title!} description={currentJob?.description} benefits={currentJob?.benefits}/>
                    <div className='flex flex-start w-2/5'>
                        <ApplyBtn/>
                    </div>
                </div>

                <div className='flex flex-col mt-10 flex-start w-2/5'>
                    {currentJob?.benefits && currentJob?.employment_type &&
                        <AdditionalInfo benefits={currentJob?.benefits} employment_type={currentJob?.employment_type}/>}
                </div>

                <div className='w-2/5 mt-10'>
                    <AttachedImgs pictures={currentJob?.pictures}/>
                </div>

            </div>


            <div className='flex flex-col  items-center justify-items-center w-3/5 mb-20'>
                <button onClick={() => navigate('/')}
                        className='bg-slate-300  rounded-xl p-4 flex text-xl hover:scale-110 duration-150 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                    </svg>
                    <span className='ml-4'>Return to job board</span>
                </button>
            </div>
            {width <1300?
                <div className='flex flex-col items-center '>
                    <h2  className='text-stone-800 text-2xl'>Contacts</h2>
                    <hr className='mt-1 mb-2 w-2/5'/>
                    <MapDisplay name={currentJob?.name!} address={currentJob?.address!} email={currentJob?.email!} phone={currentJob?.phone!}/>
                </div>
                :
                ''
            }

        </>

    );
};
export default DetailedPage;