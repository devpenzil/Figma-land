import React from 'react'
import BasicPara from '../../../components/BasicPara'
import Company from '../../../components/Company'
import SimpleHead from '../../../components/SimpleHead'
import SubHead from '../../../components/SubHead'
import google from '../../../assets/google.svg'
import amazon from '../../../assets/amazon.svg'
import microsoft from '../../../assets/microsoft.svg'
import uber from '../../../assets/uber.svg'
import drpbox from '../../../assets/dropbox.svg'
import Button from '../../../components/Button'
function Partners() {
    const content = {
        label: 'Partners',
        para:'Most calendars are designed for teams. Slate is designed for freelancers'
    }
    return (
        <>
            <div className='container mx-auto my-8 text-center flex flex-col justify-center items-center'>
                <SubHead label={content.label} classname='text-center' />
                <BasicPara label={content.para} classname='text-center mt-4 w-33.25' />
                <div className='mt-8'>
                    <div className='flex'>
                        <Company url={google} />
                        <Company url={amazon} />
                        <Company url={microsoft}/>
                        <Company url={uber}/>
                    </div>
                    <div className='flex'>
                        <Company url={drpbox} />
                        <Company url={google} />
                        <Company url={uber} />
                        <Company url={amazon} />
                    </div>
                </div>
                <Button label='try for free' classname='mt-12'/>
            </div>
        </>
    ) 
}

export default Partners
