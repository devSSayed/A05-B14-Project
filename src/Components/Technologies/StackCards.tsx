import { RxCross2 } from "react-icons/rx";
import type { iTechType } from "../Types/TechType";
import type { Dispatch, SetStateAction } from "react";

interface iStackProps {
    selectedForStack: iTechType
    setSelectedToStack:Dispatch<SetStateAction<iTechType[]>>
    handleRemoveStackCard: (TechnoCard: iTechType) => void
}

const StackCards = ({ selectedForStack, handleRemoveStackCard }: iStackProps) => {
    return (
        <div>
            <div className="w-auto p-4 border-2 border-[#E2E8F0] rounded-2xl mb-2.5">

                <div className="flex justify-between items-center">
                    <div className="flex gap-2.5">
                        <img className="w-11" src={selectedForStack.icon} alt="Icon" />
                        <div>
                            <h4 className="font-jakarta font-bold text-[17px]">{selectedForStack.name}</h4>
                            <p>{selectedForStack.category}</p>
                        </div>
                    </div>
                    
                    <RxCross2 onClick={() => handleRemoveStackCard(selectedForStack)}  className="text-3xl text-gray-400 hover:text-[#D82C20] cursor-pointer" />

                </div>

                



            </div>

        </div>
    );
};

export default StackCards;