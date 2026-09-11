import type { iTechType } from "../Types/TechType";

interface iTechnoStackProps {
    Technologys: iTechType[]
}



const TechnologyStack = ({ Technologys }: iTechnoStackProps) => {
    return (
        <div className=" flex flex-col gap-3.5 border-gray-400/40 min-h-32 rounded-3xl h-fit w-96 mt-7 border-2 p-5">
            <div>
                <h2 className="text-[#0F172A] font-jakarta font-bold text-2xl mb-1.5">Your Stack</h2>
                <p className="font-jakarta font-light text-[#64748B]">No technologies selected yet.</p>
            </div>

            <div className="mt-auto">
                <p className="whitespace-nowrap px-24 py-6 border-2 border-dotted rounded-2xl border-[#E2E8F0] font-jakarta font-medium text-[#94A3B8]">Your stack is empty.</p>
            </div>
        </div>
    );
};

export default TechnologyStack;