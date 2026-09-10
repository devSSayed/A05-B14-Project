import type { iTechType } from "../Types/TechType";


interface iTechCardProps{
    Technologys: iTechType[]
}

const TechnologyCards = ({Technologys}:iTechCardProps) => {
    return (
        <>
            {
                Technologys.map((Technology) => {
                    return <div className="container mx-auto">
                        <h2>{Technology.name}</h2>
                    </div>
                })
            }
        </>
    );
};

export default TechnologyCards;