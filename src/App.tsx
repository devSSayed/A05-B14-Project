import { Suspense } from 'react';
import HeroSec from './Components/HeroSec';
import NavBar from './Components/navBar';
import Technologies from './Components/Technologies/Technologies';

const TechnologyFetch = async() =>{
  const ser = await fetch('/data.json')
  const data = await ser.json()
  return data;
}

function App() {

  const TechnologyPromise = TechnologyFetch()

  return (
    <>
    <NavBar />
    <HeroSec />

    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Technologies TechnologyPromise={TechnologyPromise}/>
    </Suspense>

    </>
  )
}

export default App
