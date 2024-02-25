import { data } from "../data";
import { Icon } from "./components/Icon";

const Card = ({ title, description, color, children }) => {
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-title">
                    <h2>
                        {title}
                    </h2>
                    {description && <small>
                        {description}
                    </small>}
                </div>
                {children}
            </div >
        </>
    )
}

const ProjectCard = ({ name, skills, description, repo, link }) => {
    return (
        <>
            <div className="projects-portions">
                <div >
                    <div className="project-title">
                        {skills.map(skill => <Icon key={skill.id}  {...skill} />)}
                        <p>
                            {name}
                        </p>
                    </div>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="project-link">
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

export function Overlay() {
    return (
        <>
            <div className="container">
                <div className="card title">
                    <h1>
                        {data.name}
                    </h1>
                </div >
                <Card title={data.summary} description={data.summary2} color={data.colors.contacts}>
                    <div className="intro" style={{ backgroundColor: data.colors.contactsF }}>
                        {data.contacts.map((logo, i) =>
                            <div key={i} className="intro-portions">
                                <Icon {...logo} />
                            </div>
                        )}
                    </div>
                </Card>
                <Card title={"Skills"} color={data.colors.skills}>
                    <div className="intro" style={{ backgroundColor: data.colors.skillsF }}>
                        {data.skills.skills.map((skill, i) =>
                            <div key={i} className="intro-portions">
                                <Icon {...skill} />
                            </div>
                        )}
                    </div>
                </Card>
                <Card title={"Projects"} color={data.colors.projects}>
                    <div className="projects" style={{ backgroundColor: data.colors.projectsF }}>
                        {data.projects.projects.map((project, i) =>
                            <ProjectCard key={i} {...project} />
                        )}
                    </div>
                </Card>

                <div className="card" style={{ backgroundColor: data.colors.end }}>
                    <div className="end" style={{ backgroundColor: data.colors.endF }}>
                        <h2>
                            {data.end}
                        </h2>
                    </div>
                </div >
            </div>

        </>
    )
}