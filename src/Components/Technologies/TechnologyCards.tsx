import { useState } from "react";
import type { iTechType } from "../Types/TechType";
import { GiCheckMark } from "react-icons/gi";


interface iTechCardProps {
    Technologys: iTechType
}

const TechnologyCards = ({ Technologys }: iTechCardProps) => {

    const [isMarked, setIsMarked] = useState<boolean>(false)

    // const handelButtonState = (type:boolean) =>{
    //     if(isMarked){
    //         setIsMarked(type)
    //     }
    // }

    return (
        <div className="container mt-7 mx-auto flex  gap-9">            
                     <div className="hover-3d cursor-default" key={Technologys.key}>
                        <div className={`${isMarked === true ? "border-2 border-[#DB2777]/50 min-h-44 rounded-3xl p-5 flex flex-col " : "border-2 border-gray-400/40 min-h-44 rounded-3xl p-5 flex flex-col "}`}>
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
                                <button onClick={() => setIsMarked(true)} className={` ${isMarked === true ? "cursor-default bg-[#DB2777]/10 font-jakarta  font-medium py-3 rounded-xl text-[#DB2777] w-full" : "cursor-pointer bg-black font-jakarta  font-medium py-3 rounded-xl text-white w-full"} `}>
                                    {isMarked === true ? <> <span className="flex justify-center items-center"> <GiCheckMark /> <span>Added to Stack</span> </span> </>: 'Add to Stack'}
                                    </button>
                            </div>

                        </div>
                    </div>
                
            
        </div>
    );
};

export default TechnologyCards;