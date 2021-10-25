import React from 'react'
interface head{
    label: string,
    classname?: string
}
const SimpleHead:React.FC<head> = ({label,classname}) => {
    return (
        <div className={`${classname} font-bold text-xl`}> 
            {label}
        </div>
    )
}

export default SimpleHead
