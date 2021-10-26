import React from 'react'
import ContactNum from '../../../components/ContactNum'
import FooterLinks from '../../../components/FooterLinks'

function Footer() {
    const set1 = {
        head: 'Pages',
        link1: 'Home',
        link2: 'Product',
        link3: 'Pricing',
        link4: 'About',
        link5: 'Contact'
    }
    const set2 = {
        head: 'Tomothy',
        link1: 'Eleanor Edwards',
        link2: 'Ted Robertson',
        link3: 'Annette Russell',
        link4: 'Jennie Mckinney',
        link5: 'Gloria Richards'
    }
    const set3 = {
        head: 'Jane Black',
        link1: 'Philip Jones',
        link2: 'Product',
        link3: 'Colleen Russell',
        link4: 'Marvin Hawkins',
        link5: 'Bruce Simmmons'
    }
    return (
        <div className='bg-pricing py-12'>
            <div className='container mx-auto flex justify-center space-x-20'>
                <div>
                    <FooterLinks data={set1} />
                </div>
                <div>
                <FooterLinks data={set2} />
                </div>
                <div>
                <FooterLinks data={set3} />
                </div>
                <div>
                    <ContactNum place='7480 Mockingbird Hill undefined ' num='(239) 555-0108'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
