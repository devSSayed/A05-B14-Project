import MainLogo from '../assets/text-logo.png'
import hamIcon from '../assets/hamburger.png'

const navBar = () => {
    return (
        <nav className="border-b border-black/25 sticky top-0 z-50 bg-white/50 backdrop-blur-md shadow-sm">
            <div className="flex justify-between items-center gap-6 py-6 px-6 xl:px-6 container mx-auto">
                <img className='md:hidden' src={hamIcon} alt="" />
                <img className=' w-32 md:w-36 xl:w-36' src={MainLogo} alt="Main Logo" />

                <ul className="hidden md:flex justify-between items-center gap-2.5 ">
                    <li className='font-jakarta text-[#DB2777] font-medium cursor-pointer'>Home</li>
                    <li className='font-jakarta font-medium cursor-pointer hover:text-purple-600'>Technologies</li>
                    <li className='font-jakarta font-medium cursor-pointer hover:text-purple-600'>Projects</li>
                    <li className='font-jakarta font-medium cursor-pointer hover:text-purple-600'>About</li>
                    <li className='font-jakarta font-medium cursor-pointer hover:text-purple-600'>Contact</li>
                </ul>

                <div className='flex gap-2.5'>
                    <button className="md:whitespace-nowrap font-jakarta text-[11px] md:text-[1rem] xl:text-[1rem] font-medium cursor-pointer hover:bg-gray-500  active:bg-black hover:text-white p-4 py-2 rounded-3xl">Sign In</button>
                    <button className="md:whitespace-nowrap font-jakarta text-[11px] md:text-[1rem] xl:text-[1rem] font-medium cursor-pointer bg-[#DB2777] hover:bg-pink-400 active:bg-pink-600 text-white p-4 py-2 rounded-3xl">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default navBar;