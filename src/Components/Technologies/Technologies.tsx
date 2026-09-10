import type { iTechType } from "../Types/TechType";




const Technologies = ({TechnologyPromise}:{TechnologyPromise:Promise<iTechType[]>}) => {

    const Technology = TechnologyPromise;
    console.log(Technology);
    return (
        
        <div>
            
        </div>
    );
};

export default Technologies;