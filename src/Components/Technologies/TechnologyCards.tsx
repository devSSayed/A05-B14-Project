import type { iTechType } from "../Types/TechType";


interface iTechCardProps {
    Technologys: iTechType[]
}

const TechnologyCards = ({ Technologys }: iTechCardProps) => {
    return (
        <div className="container mt-7 mx-auto grid grid-cols-3 gap-9">
            {
                Technologys.map((Technology: iTechType) => {
                    return <div className="hover-3d cursor-default" key={Technology.key}>
                        <div className="border-2 border-gray-400/40 min-h-44 rounded-3xl p-5 flex flex-col ">
                            <div className="flex justify-between items-center">
                                <img className="w-10" src={Technology.icon} alt="icon" />
                                <p className="font-jakarta text-[14px] font-semibold bg-blue-300/30 py-2 px-5 rounded-3xl border-2 border-blue-300/50">{Technology.badge}</p>
                            </div>
                            <div className="mt-5">
                                <h2 className="text-[#0F172A] font-jakarta font-bold text-3xl mb-2.5">{Technology.name}</h2>
                                <p className="font-jakarta font-light text-[#64748B]">{Technology.description}</p>
                            </div>


                            <div className="mt-auto">
                                <div className="divider"></div>
                                <div className="flex justify-between items-center mb-7">
                                    <p className="text-[#0F172A] font-jakarta font-medium bg-[#F1F5F9] px-2.5 py-1 rounded-sm">{Technology.category}</p>
                                    <p className="text-[#64748B] font-jakarta font-medium">{Technology.difficulty}</p>
                                    <p className="font-jakarta font-semibold">⭐{Technology.rating}</p>
                                </div>
                                <button className="cursor-pointer bg-black font-jakarta font-medium py-3 rounded-xl text-white  w-full">Add to Stack</button>
                            </div>

                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default TechnologyCards;