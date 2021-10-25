import React from 'react'
import mac from '../../../assets/mac.png'
import man from '../../../assets/man.png'
import BasicPara from '../../../components/BasicPara'
import Button from '../../../components/Button'
import SubHead from '../../../components/SubHead'
function Details() {
    const content = {
        heading1: 'Fastest way to organize',
        content1: 'Most calendars are designed for teams. Slate is designed for freelancers',
        button1:'Try for Free'
    }
    return (
        <>
            <div className="container justify-around items-center flex mx-auto my-52">
                <div className='w-33.25'>
                    <SubHead label={content.heading1} classname='w-20.938' />
                    <BasicPara label={content.content1} classname={'mt-4'} />
                    <Button label={content.button1} classname={'mt-4'}/>
                </div>
                <div>
                    <img src={mac} alt="" />
                </div>
            </div>

            <div className="container justify-around items-center flex mx-auto my-52">
                <div className='w-33.25'>
                    <img src={man} alt="" />
                </div>
                <div>
                    <div className="flex">
                        <Button label={content.button1}  /> 
                        <Button label={content.button1} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
