import HeroImg from '../assets/banner-stack.png'

const HeroSec = () => {
    return (
        <section className='mt-12'>
            <div className='container mx-auto xl:flex xl:flex-row xl:justify-between items-center gap-5 flex flex-col md:flex-col justify-between'>
                <div className='flex flex-col justify-between gap-12'>
                    <h2 className='font-inter text-[43px] md:text-6xl xl:text-7xl text-center xl:text-start md:text-center font-bold text-[#0F172A]'>Build Your Ideal <br /> <span className='bg-linear-to-r from-orange-500 via-pink-500 to-purple-800 bg-clip-text text-transparent'>Development Stack</span></h2>
                    <p className='text-center xl:text-start md:text-center font-jakarta text-[1rem] md:text-[1.5rem] xl:text-[1.7rem] text-[#475569]'>Explore frontend, backend, database, and tooling <br className='md:hidden xl:hidden'/> options, <br className='hidden md:block xl:block ' />
                        compare them side by side, and put together the stack that fits your <br className='hidden md:block xl:block' />
                        next project.</p>

                    <div className='flex gap-2 justify-center xl:justify-start mx-5 md:mx-0 xl:mx-0'>
                        <button className="py-2 px-12 xl:py-3 xl:px-2.5 rounded-xl font-inter text-[13px] md:text-[1rem] xl:text-[1rem] font-medium text-white cursor-pointer bg-linear-to-r from-orange-500 to-pink-600">Explore Technologies</button>
                        <button className="py-2 px-16 xl:py-3 xl:px-12 rounded-xl font-inter text-[13px] md:text-[1rem] xl:text-[1rem] cursor-pointer text-[#374151] border-2 border-gray-400/30 hover:bg-gray-400/30 active:bg-gray-400/70">Learn More</button>
                    </div>
                </div>

                <img className='' src={HeroImg} alt="Banner Stack Img" />
            </div>

        </section>
    );
};

export default HeroSec;