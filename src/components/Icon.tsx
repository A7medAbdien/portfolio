import React from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface IconProps {
    id: string;
    img: string;
    link?: string;
    text: string;
    place?: any;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ id, img, link, text, place, size = 35 }) => {
    return (
        <>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} width={size} alt="" data-tooltip-id={id} />
            </a>}
            {!link && <img src={img} width={size} alt="" data-tooltip-id={id} />}
            <Tooltip
                id={id}
                place={place}
                content={text}
            />
        </>
    )
}
