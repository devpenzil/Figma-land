import React from 'react'
interface button{
    label:string
}
const Button:React.FC<button> = ({label}) => {
    return (
        <>
            <button className='bg-blue-500 hover:bg-blue-400 transition duration-300 text-white px-8 py-2 rounded-full font-semibold'>{label}</button>   
        </>
    )
}

export default Button
