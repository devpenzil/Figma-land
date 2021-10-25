import React from 'react'
interface heading{
    label: string,
    classname?:string
}
const Heading:React.FC<heading> = ({label, classname}) => {
    return (
        <>
            <div className={`${classname} text-7xl text-white font-bold`}>{label}</div>
        </>
    )
}

export default Heading
