import React from 'react'
interface para{
    label: string,
    white?: boolean
}
const BasicPara:React.FC<para> = ({label,white}) => {
    return (
        <>
            <div className={ `${white ? 'text-white' : "" }  text-lg font-normal`}>{label}</div>
        </>
    )
}

export default BasicPara
