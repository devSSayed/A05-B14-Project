import FooterLogo from '../assets/text-logo.png'

const Footer = () => {
    return (
        <div className='mt-50 border-t-2 border-[#F1F5F9]'>
            <div className='container mx-auto mt-20 xl:mt-30 xl:pr-48 flex justify-center xl:justify-between items-center gap-36'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-col justify-between items-center xl:items-start'>
                        <img className='w-36' src={FooterLogo} alt="MainLogo" />
                        <p className='font-jakarta text-[#64748B] text-[15px] text-center xl:text-start mt-3.5'>Curated tools, technologies, and resources for developers <br className='xl:hidden' /> building <br className='hidden xl:block' />
                            modern software.</p>
                    </div>


                    <ul className='flex justify-between items-center gap-6 xl:pr-64'>
                        <li className='font-jakarta font-semibold text-[#475569] hover:text-blue-500 cursor-pointer'>GitHub</li>
                        <span className='text-[#475569] xl:hidden'>&bull;</span>
                        <li className='font-jakarta font-semibold text-[#475569] hover:text-blue-500 cursor-pointer'>Twitter</li>
                        <span className='text-[#475569] xl:hidden'>&bull;</span>
                        <li className='font-jakarta font-semibold text-[#475569] hover:text-blue-500 cursor-pointer'>Linkdin</li>
                    </ul>

                </div>

                <div className='hidden xl:flex flex-col justify-between gap-4 '>
                    <p className='font-jakarta font-semibold text-[#0F172A]'>PRODUCT</p>

                    <ul className='flex flex-col justify-between gap-1.5'>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Home</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Technologies</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Projects</li>
                    </ul>
                </div>

                <div className='hidden xl:flex flex-col justify-between gap-4'>
                    <p className='font-jakarta font-semibold text-[#0F172A]'>COMPANY</p>

                    <ul className='flex flex-col gap-1.5'>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>About</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Contact</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Careers</li>
                    </ul>
                </div>

                <div className='hidden xl:flex flex-col justify-between gap-4'>
                    <p className='font-jakarta font-semibold text-[#0F172A]'>LEGAL</p>

                    <ul className='flex flex-col justify-between gap-1.5'>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Privacy Policy</li>
                        <li className='font-jakarta text-[#64748B] hover:text-purple-600 cursor-pointer'>Terms of Service</li>
                    </ul>
                </div>

            </div>

            <div className='container mx-auto mt-16 mb-8'>
                <div className="divider"></div>
                <div className='flex justify-between items-center px-6 xl:px-0 '>
                    <p className='font-jakarta text-[#94A3B8] text-[12px] xl:text-[15px]'>© 2026 Dev Stack. All rights reserved.</p>

                    <ul className='flex items-center gap-4'>
                        <li className='font-jakarta text-[12px] xl:text-[1rem] text-[#94A3B8] hover:text-blue-500 hover:underline cursor-pointer'>Privacy</li>
                        <li className='font-jakarta text-[12px] xl:text-[1rem] text-[#94A3B8] hover:text-blue-500 hover:underline cursor-pointer'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;