
import { FC } from 'react'
import './LoadingSpinner.scss'
type LoadingSpinnerProps = {
    color?: string;
    bgColor?: string;
    marginLeft?: string;
    marginRight?: string;
    width?: string;
    height?: string;
    translateX?: number,
    translateY?: number,
    absolute?: boolean

};

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
    color,
    bgColor,
    marginLeft,
    marginRight,
    width,
    height,
    translateX,
    translateY,
    absolute
}) => {
    const customSpinnerColor = {
        borderTopColor: color || "#7300ff",
        marginLeft: marginLeft || "auto",
        marginRight: marginRight || "auto",
        width: width || "3rem",
        height: height || "3rem",
        backgroundColor: bgColor || "transparent",
    };

    return <div style={{ transform: `translate(${(translateX || 0)}px, ${translateY || 0}px)` }} className={absolute ? 'loading__spinner' : ''}><div id="loading" className="display" style={customSpinnerColor}></div></div>;
};

export default LoadingSpinner