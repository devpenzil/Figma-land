import React from 'react'
import logo from '../../../assets/logo.svg'
function NavBar() {
    return (
        <div>
            <div className="container mx-auto px-12 py-2">
                <div className='flex justify-between'>
                    <div className='text-white flex space-x-3 justify-end text-sm font-normal'>
                        <div>Home</div>
                        <div>Product</div>
                        <div>Pricing</div>
                        <div>About</div>
                        <div>Contact</div>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                    <div className='text-2xl text-white space-x-4'>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
