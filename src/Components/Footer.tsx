import FooterLogo from '../assets/text-logo.png'

const Footer = () => {
    return (
        <div className='container mx-auto mt-60'>
            <div className=' flex justify-between items-center gap-36'>
                <div className='flex flex-col justify-between gap-4'>
                    <div>
                        <img className='w-36' src={FooterLogo} alt="MainLogo" />
                        <p className='font-jakarta text-[#64748B] text-[15px] mt-3.5'>Curated tools, technologies, and resources for developers building <br />
                            modern software.</p>
                    </div>

                    <ul className='flex justify-between items-center pr-64'>
                        <li className='font-jakarta font-semibold text-[#475569] hover:text-blue-500 cursor-pointer'>GitHub</li>
                        <li className='font-jakarta font-semibold text-[#475569] hover:text-blue-500 cursor-pointer'>Twitter</li>
                        <li className='font-jakarta font-semibold text-[#475569] hover:text-blue-500 cursor-pointer'>Linkdin</li>
                    </ul>
                </div>

                <div className='flex flex-col justify-between gap-4'>
                    <p className='font-jakarta font-semibold text-[#0F172A]'>PRODUCT</p>

                    <ul className='flex flex-col justify-between gap-1.5'>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Home</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Technologies</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Projects</li>
                    </ul>
                </div>

                <div className='flex flex-col justify-between gap-4'>
                    <p className='font-jakarta font-semibold text-[#0F172A]'>COMPANY</p>

                    <ul className='flex flex-col gap-1.5'>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>About</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Contact</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Careers</li>
                    </ul>
                </div>

                <div className='flex flex-col justify-between gap-4'>
                    <p className='font-jakarta font-semibold text-[#0F172A]'>LEGAL</p>

                    <ul className='flex flex-col justify-between gap-1.5'>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Privacy Policy</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Terms of Service</li>
                    </ul>
                </div>

            </div>

            <div className='mt-16 mb-8'>
                <div className="divider"></div>
                <div className='flex justify-between items-center'>
                    <p className='font-jakarta text-[#94A3B8] text-[15px]'>© 2026 Dev Stack. All rights reserved.</p>

                    <ul className='flex items-center gap-4'>
                        <li className='font-jakarta text-[#94A3B8] hover:text-blue-500 hover:underline cursor-pointer'>Privacy</li>
                        <li className='font-jakarta text-[#94A3B8] hover:text-blue-500 hover:underline cursor-pointer'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;