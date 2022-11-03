import React from 'react';

type TInfoProps ={
    name: string,
    salary: string
}

const MainJobInfo = ({name, salary}:TInfoProps) => {
    return (
        <>
            <div className='text-stone-800 text-2xl'>
                {name}
            </div>

            <div className='text-gray-800'>
                <p className='font-semibold'>{salary}</p>
                <p>Brutto,per year</p>
            </div>
        </>

    );
};

export default MainJobInfo;