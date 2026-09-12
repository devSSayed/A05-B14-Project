import { use, useState } from "react";
import type { iTechType } from "../Types/TechType";
import TechnologyCards from "./TechnologyCards";
import TechnologyStack from "./TechnologyStack";

interface iTechnologyProps {
    TechnologyPromise: Promise<iTechType[]>
}


const Technologies = ({ TechnologyPromise }: iTechnologyProps) => {

    const Technologys = use(TechnologyPromise)

    const [selectedToStack, setSelectedToStack] = useState<iTechType[]>([])

        
    const handleRemoveStackCard = (TechnoCard:iTechType) =>{
        const restStackCards = selectedToStack.filter((selectedCard) => selectedCard.name !== TechnoCard.name)

        setSelectedToStack(restStackCards)
    }

    return (

        <div className="mt-14">
            <div className="container mx-auto">
                <h2 className="font-inter text-[#0F172A] text-[40px] font-extrabold">Explore the <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Technologies</span></h2>
                <p className="font-jakarta text-[1.1rem] text-gray-400">Pick one technology per category to build your ideal stack.</p>
            </div>


            <div className="container mx-auto flex gap-6">
                <div className=" grid grid-cols-3 gap-9">
                    {
                        Technologys.map((Technology: iTechType) => {
                            return <TechnologyCards key={Technology.key} Technologys={Technology} selectedToStack={selectedToStack} setSelectedToStack={setSelectedToStack}  />
                        })
                    }
                </div>


                <TechnologyStack selectedToStack={selectedToStack} setSelectedToStack={setSelectedToStack} handleRemoveStackCard={handleRemoveStackCard} />
            </div>



        </div>
    );
};

export default Technologies;