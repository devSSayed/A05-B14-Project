import type { iTechType } from "../Types/TechType";

interface iTechnoStackProps {
    Technologys: iTechType[]
}



const TechnologyStack = ({Technologys}:iTechnoStackProps) => {
    return (
        <div className="border-gray-400/40 min-h-44 rounded-3xl mt-7 border-2 h-44 w-96 p-5">
            <h2>Hello</h2>
        </div>
    );
};

export default TechnologyStack;