import React from 'react';

type TDescType = {
    description: string | undefined,
    benefits: string[] | undefined,
    title: string | undefined,
}

const Description = ({description, benefits,title}:TDescType) => {
    return (
        <>
            <article>
                {title}
            </article>
            <br/>
            <h2 className='font-bold'>Responsibilities</h2>
            <article>
                {description}
            </article>
            <br/>
            <div>
                <h2 className='font-bold text-lg'>Benefits:</h2>
                <ul className='list-disc'>
                    {benefits?.map((item,index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>

        </>
    );
};

export default Description;