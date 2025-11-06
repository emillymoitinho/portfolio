import React from "react";

interface CardTechProps {
    icon: React.ElementType;
    name: string;
    category: string;
}

function CardTech({ icon, name, category }: CardTechProps) {
    const Icon = icon;

    return (
        <div className="w-70 flex flex-col p-4! text-gray-400 font-semibold rounded-xl border border-[#d8d4d325] transition duration-300 hover:bg-[#d8d4d325] hover:scale-110 ">
            <div className="flex items-center gap-4">
                <div className="flex justify-center items-center p-2! rounded-lg bg-[#2A282E]">
                    <Icon />
                </div>
                <div>
                    <p>{name}</p>
                    <p className="text-[12px] font-normal">{category}</p>
                </div>
            </div>

        </div>
    );
}

export default CardTech;
