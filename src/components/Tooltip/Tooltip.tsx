import React, { FC } from "react";
import './Tooltip.scss'

type TooltipPropsType = {
    position: string;
    message: string;
}

const Tooltip: FC<TooltipPropsType> = ({ message, position }) => {
    return (
        <div>
            <span className={`tooltip tooltip-${position}`}>{message}</span>
        </div>
    );
}

export default Tooltip