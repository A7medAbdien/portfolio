import { logos, meta, summary, summary2 } from "../data";

export const Card = ({ children }) => {
    return (
        <>
            <div className="card">
                <div className="card-title">
                    <p>
                        {summary}
                    </p>
                    <small>
                        {summary2}
                    </small>
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
                        {meta.name}
                    </h1>
                </div >
                <Card>
                    <div className="intro">
                        {logos.map(logo =>
                            <div className="intro-portions">
                                <img src={logo.imgUrl} width={40} alt="" />
                            </div>
                        )}
                    </div>
                </Card>
                <div className="card">
                    {summary}
                </div>
            </div>

        </>
    )
}
