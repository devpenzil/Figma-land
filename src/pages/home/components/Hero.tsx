import React from 'react'
import BasicPara from '../../../components/BasicPara'
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'
import './common.css'
function Hero() {
    const content = {
        head1: 'The best products',
        head2: 'start with Figma',
        paragraph: "Most calendars are designed for teams. Slate is designed  for freelancers",
        button: 'Try for Free'
    }
    return (
        <>
            <div className='hero h-screen w-full'>
                <nav>
                    Navbar
                </nav> 
                <div className='text-center flex flex-col h-screen justify-center items-center'>
                    <div>
                        <Heading label={content.head1} />
                        <Heading label={content.head2} />
                    </div>
                    <div className='mt-4'>
                        <BasicPara label={content.paragraph} white={true} />
                    </div>
                    <div className='mt-8'>
                        <Button label={content.button} />
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Hero