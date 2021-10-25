import React from 'react'
interface fbox{
    image?: string,
    heading?: string,
    content?:string
}
const FeatureBox:React.FC<fbox> = ({image, heading, content}) => {
    return (
        <div className='w-56'>
            <img className='mx-auto' src={image} alt="" />
            <div className='text-center text-xl mt-6 font-bold'>{heading}</div>
            <div className='text-center text-lg font-normal text-designgray mt-5'>{content}</div>
        </div>
    )
}

export default FeatureBox
