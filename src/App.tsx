import { Suspense } from 'react';
import HeroSec from './Components/HeroSec';
import NavBar from './Components/navBar';
import Technologies from './Components/Technologies/Technologies';
import type { iTechType } from './Components/Types/TechType';
import Footer from './Components/Footer';

const TechnologyFetch = async (): Promise<iTechType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {

  const TechnologyPromise = TechnologyFetch()

  return (
    <>
      <NavBar />
      <HeroSec />

      <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>}>
        <Technologies TechnologyPromise={TechnologyPromise} />
      </Suspense>

      <Footer />
    </>


  )
}

export default App
