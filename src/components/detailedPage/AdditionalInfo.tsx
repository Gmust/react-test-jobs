import React from 'react';


type TAddInfoProps = {
    benefits: string[] | undefined,
    employment_type: string[] | undefined
}

const AdditionalInfo = ({employment_type, benefits}: TAddInfoProps) => {
    return (
        <>
            <h2 className='font-bold text-xl'>Additional info</h2>
            <hr className='mt-1 w-full'/>
            <h2>Employment type</h2>
            {employment_type?.map((type, index) =>
                <div key={index}
                     className='border-2 bg-slate-400 border-cyan-600 text-zinc-700 text-2xl rounded-lg w-32 text-center p-2 mb-2'>
                    {type}
                </div>)}
            <br/>
            <h2>Benefits:</h2>
            <div className='inline-flex flex space-x-2'>
                {benefits?.map((b, index) =>
                    <div key={index}
                         className='border-2 border-amber-400 bg-yellow-200      text-xl rounded-lg w-36 text-center p-2 mb-2'>
                        {b}
                    </div>
                )}
            </div>
        </>
    );
};

export default AdditionalInfo;