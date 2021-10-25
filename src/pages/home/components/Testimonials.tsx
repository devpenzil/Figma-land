import React from 'react'
import BasicPara from '../../../components/BasicPara'
import SubHead from '../../../components/SubHead'
import ibm from '../../../assets/ibm.svg'
import Button from '../../../components/Button'
import User from '../../../components/User'
import user from '../../../assets/user.png'
function Testimonials() {
    const content = {
        head: 'Testimonials',
        para: 'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.',
        name: 'Organize across',
        designation: 'Ui designer',
        button:'More Testimonials'
    }
    return (
        <>
            <div className="container mx-auto my-44">
                <SubHead label={content.head} classname='text-center' />
                <img src={ibm} alt="" className='mx-auto my-12'/>
                <BasicPara label={content.para} classname='text-center w-60.438 mx-auto' />
                <div className='w-max mx-auto my-8'>
                    <User url={user} name={content.name} designation={content.designation}  />
                </div>
                <div className='w-max mx-auto my-8'>
                    <Button label={content.button} classname='mx-auto text-center' />
               </div>
            </div>
        </>
    )
}

export default Testimonials
