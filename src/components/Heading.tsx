import React from 'react'
interface heading{
    label:string
}
const Heading:React.FC<heading> = ({label}) => {
    return (
        <>
            <div className='text-7xl text-white font-bold'>{label}</div>
        </>
    )
}

export default Heading
