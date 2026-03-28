import React from 'react';
import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-black text-[#ffffff]'>
            <div className='max-w-330 mx-auto'>
                <img className='mx-auto pt-7 w-35' src={footerLogo} alt="Footer Logo" />

                <div className='flex gap-44 items-center justify-center mt-16'>
                    <div>
                        <h2 className='text-[1.125rem] font-semibold'>About Us</h2>
                        <p className='max-w-72 text-[1rem] font-normal text-[#ffffff]/60 mt-4'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div>
                        <h2 className='text-[1.125rem] font-semibold'>Quick Links</h2>
                        <ul className='list-disc text-[1rem] font-normal text-[#ffffff]/60 mt-4'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[1.125rem] font-semibold'>Subscribe</h2>
                        <p className='mb-6 max-w-72 text-[1rem] font-normal text-[#ffffff]/60 mt-4'>Subscribe to our newsletter for the latest updates.</p>

                        <input className='bg-white text-black py-3.5 px-6.5 rounded-l-xl' type="email" placeholder='Enter Your Email' />

                        <input className='bg-amber-300 text-black py-3.5 px-6.5 rounded-r-xl' type="submit" value="Subscribe" />

                    </div>
                </div>
                <div className="divider"></div>
                <div className='text-center py-8'>@2024 Your Company All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;