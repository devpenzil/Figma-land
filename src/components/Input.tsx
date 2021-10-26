import React from 'react'
interface input{
    placeholder: string,
    classname?: string,
    type:string
}
const Input:React.FC<input> = ({placeholder, classname,type}) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className={`${classname} bg-gray-100 px-8 py-2 rounded-full `} />
        </>
    )
}

export default Input
