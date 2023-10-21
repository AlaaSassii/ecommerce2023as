
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
        borderTopColor: color || "#7300ff",
        marginLeft: marginLeft || "auto",
        marginRight: marginRight || "auto",
        width: width || "3rem",
        height: height || "3rem",
        backgroundColor: bgColor || "transparent",
    };

    return <div className='loading__spinner'><div id="loading" className="display" style={customSpinnerColor}></div></div>;
};

export default LoadingSpinner