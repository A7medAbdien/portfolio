import { data, summary, summary2 } from "../data";
import { Icon } from "./components/Icon";

const Card = ({ title, description, children }) => {
    return (
        <>
            <div className="card">
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
                        {skills.map(skill => <Icon {...skill} />)}
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
                        <img width={40} src={data.projects.repoLogo} />
                    </a>}
                    {link && <a href={link}>
                        <img width={40} src={data.projects.linkLogo} />
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
                <Card title={summary} description={summary2}>
                    <div className="intro">
                        {data.contacts.map((logo, i) =>
                            <div key={i} className="intro-portions">
                                <Icon {...logo} />
                            </div>
                        )}
                    </div>
                </Card>
                <Card title={"Skills"}>
                    <div className="intro">
                        {data.skills.skills.map((skill, i) =>
                            <div key={i} className="intro-portions">
                                <Icon {...skill} />
                            </div>
                        )}
                    </div>
                </Card>
                <Card title={"Projects"}>
                    <div className="projects">
                        {data.projects.projects.map((project, i) =>
                            <ProjectCard key={i} {...project} />
                        )}
                    </div>
                </Card>

            </div>

        </>
    )
}