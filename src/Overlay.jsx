import { logos, data, summary, summary2, portalContents } from "../data";
import { Icon } from "./components/Icon";
export const Card = ({ title, description, children }) => {
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
                        {data.contacts.map(logo =>
                            <div className="intro-portions">
                                <Icon {...logo} />
                            </div>
                        )}
                    </div>
                </Card>
                <Card title={"Skills"}>
                    <div className="intro">
                        {data.skills.skills.map(skill =>
                            <div className="intro-portions">
                                <Icon {...skill} />
                            </div>
                        )}
                    </div>
                </Card>
                <Card title={"Projects"}>
                    <div className="projects">
                        {portalContents.map(project =>
                            <div className="projects-portions">
                                <div >
                                    <div className="project-title">
                                        <img style={{ display: "inline-block" }} width={30} src={project.img} />
                                        <p>
                                            {project.name}
                                        </p>
                                    </div>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <div className="project-link">
                                    <a href="">
                                        <img width={30} src={project.repo} />
                                    </a>
                                    <a href="">
                                        <img width={30} src={project.img} />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>

            </div>

        </>
    )
}
