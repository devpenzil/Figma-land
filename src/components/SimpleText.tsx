import React from 'react'
interface text{
    label: string,
    classname?:string
}
const SimpleText:React.FC<text> = ({label,classname}) => {
    return (
        <div className={`${classname} text-lg font-normal`}>
           {label} 
        </div>
    )
}

export default SimpleText
