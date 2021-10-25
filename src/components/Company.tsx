import React from 'react'
interface company{
    url: string,
    classname?:string
}
const Company:React.FC<company> = ({url, classname}) => {
    return (
        <div className={`${classname} border-2 border-gray-400 p-4`}>
            <div>Client Name</div>
            <img src={url} alt="company" />
        </div>
    )
}

export default Company