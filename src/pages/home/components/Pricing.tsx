import React from 'react'
import BasicPara from '../../../components/BasicPara'
import PriceCard from '../../../components/PriceCard'
import SubHead from '../../../components/SubHead'

function Pricing() {
    const content = {
        head: 'Pricing',
        para: 'Most calendars are designed for teams. Slate is designed for freelancers'
    }
    const price = [
        {
            price: 'Free',
            desc: 'Organize across all apps by hand',
            dollar: '0',
            f1: 'Pricing Feature',
            f2: 'Pricing Feature',
            f3: 'Pricing Feature',
            f4: 'Pricing Feature',
            f5:'Pricing Feature'
        },
        {
            price: 'Standard',
            desc: 'Organize across all apps by hand',
            dollar: '10',
            f1: 'Pricing Feature',
            f2: 'Pricing Feature',
            f3: 'Pricing Feature',
            f4: 'Pricing Feature',  
            f5:'Pricing Feature'
        },
        {
            price: 'Business',
            desc: 'Organize across all apps by hand',
            dollar: '90',
            f1: 'Pricing Feature',
            f2: 'Pricing Feature',
            f3: 'Pricing Feature',
            f4: 'Pricing Feature',
            f5:'Pricing Feature'
        }]
    return (
        <div className='bg-pricing py-12'>
            <div className='w-max mx-auto text-center text-white'>
            <SubHead label={content.head} />
            <BasicPara label={content.para} classname='mt-4 w-20.938' />
            </div>
            <div className='flex container mx-auto justify-around my-8'>
                {price.map((obj: any) => {
                    return (
                        <div>
                           <PriceCard prices={obj} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pricing
