import React from 'react';

type TMapProps = {
    email: string,
    phone: string,
    address: string,
    name: string
}


const MapDisplay = ({name, email, address, phone}: TMapProps) => {

    return (
        <div className='bg-gradient-to-r from-slate-700 to-slate-900 w-96 h-96'>
            <div className='flex flex-col  ml-20 items-start text-slate-50 space-y-2'>
                <h2 className='text-2xl bold mt-6'>{name}</h2>
                <h3>{address}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            <br/>
            <br/>
            <iframe scrolling="no"
                    src="https://maps.google.com/maps?width=402&amp;height=218&amp;hl=en&amp;q=%209.804124,%20147.139488+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="384" height="218" frameBorder="0"><a href="https://www.gps.ie/sport-gps/">hiking
                gps</a></iframe>
        </div>
    );
};

export default MapDisplay;