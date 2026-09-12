import { type Dispatch, type SetStateAction } from "react";
import type { iTechType } from "../Types/TechType";
import { GiCheckMark } from "react-icons/gi";
import { Bounce, toast } from "react-toastify";


interface iTechCardProps {
    Technologys: iTechType
    selectedToStack: iTechType[]
    setSelectedToStack: Dispatch<SetStateAction<iTechType[]>>
}

const TechnologyCards = ({ Technologys, selectedToStack, setSelectedToStack, }: iTechCardProps) => {

    const isMarked = selectedToStack.find((IsSelected) => IsSelected.id === Technologys.id)



    const handleSelectTechnology = () => {
       
        if (selectedToStack.includes(Technologys)) {
            return
        } else {
            setSelectedToStack([...selectedToStack, Technologys])
            toast.success(`${Technologys.id} Succesfully Added to your Stack`, {
                position: "bottom-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        }


    }

    return (
        <div className="container mt-7 mx-auto flex  gap-9">
            <div className="hover-3d cursor-default" key={Technologys.key}>
                <div className={`${isMarked ? "border-2 border-[#DB2777]/50 min-h-44 rounded-3xl p-5 flex flex-col " : "border-2 border-gray-400/40 min-h-44 rounded-3xl p-5 flex flex-col "} ${selectedToStack.length === 0 ? "border-2 border-gray-400/40 min-h-44 rounded-3xl p-5 flex flex-col" : ""}`}>
                    <div className="flex justify-between items-center">
                        <img className="w-10" src={Technologys.icon} alt="icon" />
                        <p className="font-jakarta text-[14px] text-[#DB2777] font-semibold bg-[#DB2777]/10 py-2 px-5 rounded-3xl ">{Technologys.badge}</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-[#0F172A] font-jakarta font-bold text-3xl mb-2.5">{Technologys.name}</h2>
                        <p className="font-jakarta font-light text-[#64748B]">{Technologys.description}</p>
                    </div>


                    <div className="mt-auto">
                        <div className="divider"></div>
                        <div className="flex justify-between items-center mb-7">
                            <p className="text-[#0F172A] font-jakarta font-medium bg-[#F1F5F9] px-2.5 py-1 rounded-sm">{Technologys.category}</p>
                            <p className="text-[#64748B] font-jakarta font-medium">{Technologys.difficulty}</p>
                            <p className="font-jakarta font-semibold">⭐{Technologys.rating}</p>
                        </div>
                        <button onClick={() => handleSelectTechnology()} className={` ${isMarked ? "cursor-default bg-[#DB2777]/10 font-jakarta  font-medium py-3 rounded-xl text-[#DB2777] w-full" : "cursor-pointer bg-black font-jakarta  font-medium py-3 rounded-xl text-white w-full"}`}>
                            {isMarked ? <> <span className="flex justify-center items-center"> <GiCheckMark /> <span>Added to Stack</span> </span> </> : 'Add to Stack'}
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default TechnologyCards;