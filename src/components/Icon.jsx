import { Tooltip } from "react-tooltip";

export const Icon = ({ id, img, link, text, place }) => {
    return (
        <>
            {link && <a href={link} >
                <img src={img} width={40} alt="" data-tooltip-id={id} />
            </a>}
            {!link && <img src={img} width={40} alt="" data-tooltip-id={id} />}
            <Tooltip
                id={id}
                place={place}
                content={text}
            />
        </>
    )
}