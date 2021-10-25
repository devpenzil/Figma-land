import React from 'react'
interface head{
    label: string,
    classname?:string
}
const SubHead:React.FC<head> = ({label,classname}) => {
    return (
        <>
            <div className={`${classname} text-5xl font-normal `}>{label}</div>
        </>
    )
}

export default SubHead
