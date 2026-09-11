import type { Dispatch, SetStateAction } from "react";
import type { iTechType } from "../Types/TechType";
import StackCards from "./StackCards";

interface iTechnoStackProps {
    selectedToStack: iTechType[]
    setSelectedToStack: Dispatch<SetStateAction<iTechType[]>>
}




const TechnologyStack = ({ selectedToStack, setSelectedToStack }: iTechnoStackProps) => {

    
    
    const handleRemoveStackCard = (TechnoCard:iTechType) =>{
        const restStackCards = selectedToStack.filter((selectedCard) => selectedCard.name !== TechnoCard.name)

        setSelectedToStack(restStackCards)
    }

    console.log(selectedToStack);
    return (
        <div className=" flex flex-col gap-3.5 border-gray-400/40 min-h-32 rounded-3xl h-fit min-w-96 mt-7 border-2 p-5">
            <div>
                <h2 className="text-[#0F172A] font-jakarta font-bold text-2xl mb-1.5">Your Stack</h2>
                <p className="font-jakarta font-light text-[#64748B]">{selectedToStack.length === 0 ? "No technologies selected yet." : `${selectedToStack.length} Technology Selected`}</p>
            </div>

            <div className="mt-auto">
                {selectedToStack.length === 0 ? (
                    <p className="whitespace-nowrap px-24 py-6 border-2 border-dotted rounded-2xl border-[#E2E8F0] font-jakarta font-medium text-[#94A3B8]">Your stack is empty.</p>
                ) : (
                    <div>
                        {
                            selectedToStack.map((selectedForStack:iTechType) =>{
                                return <StackCards key={selectedForStack.key} selectedForStack={selectedForStack} setSelectedToStack={setSelectedToStack} handleRemoveStackCard={handleRemoveStackCard}/>
                            })
                        }

                        <button className="mt-7 font-inter font-bold w-full py-3 border-2 border-[#ED8C85]/60 text-[#D82C20] rounded-xl hover:bg-red-500/90 hover:text-white cursor-pointer">Remove All</button>
                        
                    </div>
                    
                )}



            </div>
        </div>
    );
};

export default TechnologyStack;