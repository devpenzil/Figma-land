import React from 'react'
type link = {
    head: string,
    link1:string,
    link2: string,
    link3: string,
    link4: string,
    link5: string
}
interface links{
    data:link
}
const FooterLinks:React.FC<links> = ({data}) => {
    return (
        <div className='text-white space-y-2'>
            <div className='text-xl font-bold'>{data.head}</div>
            <div className='text-sm font-normal'>{data.link1}</div>
            <div className='text-sm font-normal'>{data.link2}</div>
            <div className='text-sm font-normal'>{data.link3}</div>
            <div className='text-sm font-normal'>{data.link4}</div>
            <div className='text-sm font-normal'>{data.link5}</div>
        </div>
    )
}

export default FooterLinks
