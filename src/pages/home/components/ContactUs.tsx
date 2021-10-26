import React from 'react'
import BasicPara from '../../../components/BasicPara'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import SimpleHead from '../../../components/SimpleHead'
import SubHead from '../../../components/SubHead'
import TextArea from '../../../components/TextArea'

function ContactUs() {
    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <SubHead label='Contact Us' classname='text-center' />
                <BasicPara label='Most calendars are designed for teams. Slate is designed for freelancers' classname='mx-auto w-33.25 text-center mt-4' />

                <div className='flex justify-around items-center mt-8'>
                    <div className='p-4 shadow-md w-28.313 rounded-xl  py-8'>
                        <SimpleHead label='contact us' classname='text-center' />
                        <div className='w-max mx-auto mt-8'>
                            <Input placeholder='Your Name' type='text' classname='mx-auto w-96 ' />
                        </div>
                        <div className='w-max mx-auto mt-8'>
                            <Input placeholder='Your Email' type='email' classname='mx-auto w-96' />
                        </div>
                        <div className='w-max mx-auto mt-8'>
                            <TextArea label='your message ' classname='mx-auto w-96 h-36' />
                        </div>
                        <div className='w-max mx-auto mt-8'>
                            <Button label='Send' />
                        </div>
                    </div>
                    <div>hello</div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
