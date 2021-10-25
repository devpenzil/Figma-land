import React from 'react'
interface para{
    label: string,
    white?: boolean,
    classname?:string
}
const BasicPara:React.FC<para> = ({label,white,classname}) => {
    return (
        <>
            <div className={ `${classname} , ${white ? 'text-white' : ""  }  text-lg font-normal`}>{label}</div>
        </>
    )
}

export default BasicPara
