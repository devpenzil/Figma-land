import React from 'react'
interface user{
    url: string,
    name: string,
    designation:string
}
const User:React.FC<user> = ({url, name, designation}) => {
    return (
        <div className='flex space-x-4 items-center'>
            <div>
                <img src={url} alt="" />
            </div>
            <div>
                <div>{name}</div>
                <div className='text-sm'>{designation}</div>
            </div>
        </div>
    )
}

export default User
