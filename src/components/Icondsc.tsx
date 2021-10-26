import React from 'react'
interface icon{
    icon:string,
    label:string
}
const Icondsc:React.FC<icon> = ({icon, label}) => {
    return (
        <div className='text-center w-14.063 '>
            <i className={`${icon} text-blue-500 text-2xl`}></i>
            <div className='text-sm'>{label}</div>
        </div>
    )
}

export default Icondsc
