import { logos, data, summary, summary2 } from "../data";

export const Card = ({ title, description, children }) => {
    return (
        <>
            <div className="card">
                <div className="card-title">
                    <p>
                        {title}
                    </p>
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
                        {logos.map(logo =>
                            <a href="dsa" className="intro-portions">
                                <img src={logo.imgUrl} width={40} alt="" />
                            </a>
                        )}
                    </div>
                </Card>
                <Card title={"Skills"}>
                    <div className="intro">
                        {data.skills.skills.map(skill =>
                            <div className="intro-portions tooltip">
                                <span class="tooltiptext">{skill.toolTip}</span>
                                <img title="test" src={skill.svg} width={40} alt="" />
                            </div>
                        )}
                    </div>
                </Card>
                <Card title={"Projects"}>
                    <div className="projects">
                        {data.skills.skills.map(skill =>
                            <div className="projects-portions tooltip">
                                <span class="tooltiptext">{skill.toolTip}</span>
                                <img title="test" src={skill.svg} width={40} alt="" />
                            </div>
                        )}
                    </div>
                </Card>

            </div>

        </>
    )
}
