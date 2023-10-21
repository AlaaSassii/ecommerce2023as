
import { FC } from 'react'
import './LoadingSpinner.scss'
type LoadingSpinnerProps = {
    color?: string;
    bgColor?: string;
    marginLeft?: string;
    marginRight?: string;
    width?: string;
    height?: string;
};

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
    color,
    bgColor,
    marginLeft,
    marginRight,
    width,
    height,
}) => {
    const customSpinnerColor = {
        borderTopColor: color || "#57A639",
        marginLeft: marginLeft || "auto",
        marginRight: marginRight || "auto",
        width: width || "3rem",
        height: height || "3rem",
        backgroundColor: bgColor || "transparent",
    };

    return <div id="loading" className="display" style={customSpinnerColor}></div>;
};

export default LoadingSpinner