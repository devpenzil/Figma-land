import React from 'react'
interface con{
    place:string,
    num:string
}
const ContactNum:React.FC<con> = ({place,num}) => {
    return (
        <div className='text-white space-y-6'> 
            <div><i className="fas fa-map-marker-alt"></i> {place}</div>
            <div><i className="fas fa-mobile-alt"></i> {num}</div>
            <div className='text-2xl space-x-4'><i className="fab fa-twitter"></i> <i className="fab fa-facebook-square"></i> <i className="fab fa-linkedin"></i> </div>
        </div>
    )
}

export default ContactNum
