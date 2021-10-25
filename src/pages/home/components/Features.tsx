import React from 'react'
import BasicPara from '../../../components/BasicPara'
import FeatureBox from '../../../components/FeatureBox'
import SubHead from '../../../components/SubHead'
import icon1 from '../../../assets/icon1.svg'
import icon2 from '../../../assets/icon2.svg'
import icon3 from '../../../assets/icon3.svg'

function Features() {
    const content = {
        heading: 'Features',
        bpara1 :'Most calendars are designed for teams. ',
        bpara2: 'Slate is designed for freelancers',
        fb1head: 'OpenType features Variable fonts',
        fb2head: 'Design with real data',
        fb3head: 'Fastest way to take action',
        fb1cont: 'Slate helps you see how many more days you need to work to reach your financial goal.',
        fb2cont: 'Slate helps you see how many more days you need to work to reach your financial goal.',
        fb3cont: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    }
    return (
        <div className='container mx-auto'>
            <div className='mt-32 text-center'>
                <SubHead label={content.heading} />
                <div className='mt-6 text-designgray'>
                <BasicPara label={content.bpara1}/>
                <BasicPara label={content.bpara2} />
                </div>
                <div className='flex mt-11 justify-around mb-11'>
                    <div>
                        <FeatureBox image={icon1} heading={content.fb1head} content={content.fb1cont}/>
                    </div>
                    <div>
                        <FeatureBox image={icon2} heading={content.fb2head} content={content.fb2cont}/>
                    </div>
                    <div>
                        <FeatureBox image={icon3} heading={content.fb3head} content={content.fb3cont}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
