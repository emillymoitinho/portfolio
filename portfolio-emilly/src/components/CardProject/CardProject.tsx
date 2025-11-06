import GitHubIcon from "../SvgIcons/GitHubIcon";

interface CardProjectProps {
    img: string;
    alt: string;
    title: string;
    description: string;
    tags?: string[];
    linkProject: string;
    github: string;
}

const techColors: Record<string, string> = {
    HTML: "bg-[#FF6D00]",
    CSS: "bg-[#039BE5]",
    JavaScript: "bg-yellow-500/20",
    TypeScript: "bg-indigo-500/20",
    React: "bg-blue-500/20",
};

function getTechColor(tag: string): string {
    return techColors[tag];
}

function CardProject({ img, alt, title, description, tags = [], linkProject, github }: CardProjectProps) {
    return (
        <div className="max-w-[400px] min-w-[200px] flex-1 flex flex-col rounded-2xl overflow-hidden border  border-[#d8d4d325]">
            <img src={img} alt={alt} className="h-[200px] object-cover"/>
            <div className="h-full flex justify-between flex-col gap-4 p-5! shadow-2xl">
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-sm">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`text-xs font-medium px-4! py-1! rounded-xl ${getTechColor(tag)}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 text-sm text-center mt-4!">
                    <a href={linkProject} target="_blank" className="flex-1 py-1.5! border border-pink rounded-2xl bg-linear-to-tr from-[#E60073] via-[#FD4FA6] to-[#FF8DC7] transition duration-300 ease-in-out hover:shadow-[0_0_25px_#b74b4b] hover:-translate-y-1">Ver</a>

                    <a href={github} target="_blank" className="flex-1 py-1.5!  border border-pink rounded-2xl flex items-center justify-center gap-2 fill-pink transition duration-300 ease-in-out hover:-translate-y-1"><GitHubIcon width="20px" height="20px" /> Github</a>
                </div>
            </div>
        </div>
    )
}

export default CardProject;