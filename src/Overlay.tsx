import CloudBG from "./CloudBG";
import { Icon } from "./components/Icon";
import { data } from "./data";

interface CardProps {
    title: string;
    description?: string;
    color: string;
    className?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, color, children, className }) => {
    return (
        <>
            <div className={`${className} card`} style={{ backgroundColor: color }}>
                <div className="card-title">
                    <h2 className="text-4xl">
                        {title}
                    </h2>
                    {description && <small className="text-lg">
                        {description}
                    </small>}
                </div>
                <div className="w-full overflow-hidden rounded-b-[20px]">
                    {children}
                </div>
            </div >
        </>
    )
}

interface Project {
    name: string;
    skills: any[];
    description: string;
    repo?: string;
    link?: string;
}

const ProjectCard: React.FC<Project> = ({ name, skills, description, repo, link }) => {
    return (
        <>
            <div className="flex max-sm:flex-col justify-between items-center w-[90%]">
                <div>
                    <div className="project-title">
                        {skills.map(skill => <Icon key={skill.id} {...skill} />)}
                        <p className="text-2xl font-semibold">
                            {name}
                        </p>
                    </div>
                    <p className="text-xl">
                        {description}
                    </p>
                </div>
                <div className="project-link flex">
                    {repo && <a href={repo}>
                        <Icon img={data.projects.repoLogo} text={"Code!"} id={"repo"} size={40} />
                    </a>}
                    {link && <a href={link}>
                        <Icon img={data.projects.linkLogo} text={"Go!"} id={"live"} size={40} />
                    </a>}
                </div>
            </div>
        </>
    )
}

export const Overlay: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pt-12 gap-12 overflow-hidden">
            <div className=" lg:w-[60%] w-[95%] h-52 rounded-[20px] flex justify-center items-center text-7xl font-medium text-black relative overflow-hidden">
                <CloudBG camZ={3} lightColor='grey' style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        zIndex: 0,
                        width: '100%',
                        height: '100%',
                        background: "white"
                    }
                } />
                <div className="z-10 relative">
                    {data.name}
                    <div className="w-full h-full absolute bg-white/70 top-0 -z-10 blur-lg"></div>
                </div>
            </div >
            <Card title={data.summary} description={data.summary2} color={data.colors.contacts}>
                <div className="w-full  flex items-center justify-between px-12" style={{ backgroundColor: data.colors.contactsF }}>
                    {data.contacts.map((logo, i) =>
                        <div key={i} className="intro-portions w-fit">
                            <Icon {...logo} />
                        </div>
                    )}
                </div>
            </Card>
            <Card title={"Skills"} color={data.colors.skills}>
                <div className="w-full flex items-center justify-between px-12" style={{ backgroundColor: data.colors.skillsF }}>
                    {data.skills.skills.map((skill, i) =>
                        <div key={i} className="intro-portions w-fit">
                            <Icon {...skill} />
                        </div>
                    )}
                </div>
            </Card>
            <Card title={"Projects"} color={data.colors.projects}>
                <div className="projects " style={{ backgroundColor: data.colors.projectsF }}>
                    {data.projects.projects.map((project, i) =>
                        <ProjectCard key={i} {...project} />
                    )}
                </div>
            </Card>

            <div className="lg:w-[60%] w-[95%] rounded-t-3xl rounded-b-none card" style={{ backgroundColor: data.colors.end }}>
                <div className="w-full h-20 text-2xl flex justify-center items-center rounded-t-3xl" style={{ backgroundColor: data.colors.endF }}>
                    <h2 className="text-3xl">
                        {data.end}
                    </h2>
                </div>
            </div >
        </div>
    )
}
