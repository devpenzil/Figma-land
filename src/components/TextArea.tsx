import React from 'react'
interface txt{
    classname?:string,
    label:string
}
const TextArea:React.FC<txt> = ({classname,label}) => {
    return (
        <>
            <textarea name="" id="" className={`${classname} bg-gray-100 p-2 rounded-xl`}>
                {label}
            </textarea>
        </>
    )
}

export default TextArea
