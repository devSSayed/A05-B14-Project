import HeroImg from '../assets/banner-stack.png'

const HeroSec = () => {
    return (
        <section className='mt-12'>
            <div className='container mx-auto flex justify-between items-center gap-5'>
                <div className='flex flex-col justify-between gap-12'>
                    <h2 className='font-inter text-7xl font-bold text-[#0F172A]'>Build Your Ideal <br /> <span className='bg-linear-to-r from-orange-500 via-pink-500 to-purple-800 bg-clip-text text-transparent'>Development Stack</span></h2>
                    <p className='font-jakarta text-[1.7rem] text-[#475569]'>Explore frontend, backend, database, and tooling options,<br />
                        compare them side by side, and put together the stack that fits your <br />
                        next project.</p>

                    <div className='flex gap-2'>
                        <button className="py-3 px-2.5 rounded-xl font-inter font-medium text-white cursor-pointer bg-linear-to-r from-orange-500 to-pink-600">Explore Technologies</button>
                        <button className="py-3 px-12 rounded-xl font-inter cursor-pointer text-[#374151] border-2 border-gray-400/30 hover:bg-gray-400/30 active:bg-gray-400/70">Learn More</button>
                    </div>
                </div>

                <img src={HeroImg} alt="Banner Stack Img" />
            </div>

        </section>
    );
};

export default HeroSec;