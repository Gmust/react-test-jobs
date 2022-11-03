import React from 'react';

type TAtchImgProps ={
    pictures: string[] | undefined;
}

const AttachedImgs = ({pictures}:TAtchImgProps) => {
    return (
        <>
            <h2 className='text-2xl font-bold'>Attached images</h2>
            <hr className='mt-1 w-full'/>
            <div className='inline-flex space-x-6 mt-3 mb-10' >
                {pictures?.map((img, index) =>
                    <img key={index} src={img} alt='' className='w-60 h-36'/>)}
            </div>
        </>
    );
};

export default AttachedImgs;