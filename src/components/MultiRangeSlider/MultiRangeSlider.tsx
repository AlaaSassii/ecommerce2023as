import React, { useCallback, useEffect, useState, useRef } from "react";
import "./MultiRangeSlider.scss";
import { useProductFilter } from "../../hooks/useProductFilter";


const MultiRangeSlider = () => {
    const { priceFilter: { min, max }, changeMaximumPriceFunction, changeMinimumPriceFunction } = useProductFilter()
    const [MAX, SETMAX] = useState(0);
    const [, SETMIN] = useState(0);
    const minValRef = useRef<number>(min);
    const maxValRef = useRef<number>(max);
    const range = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        SETMAX(max);
        SETMIN(min)
    }, [])
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    const handleMinInputRangeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), max - 1);
        changeMinimumPriceFunction(value);
        minValRef.current = value;
    }
    const handleMaxInputRangeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), min + 1);
        changeMaximumPriceFunction(value);
        maxValRef.current = value;
    }

    useEffect(() => {
        const minPercent = getPercent(min);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [min, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(max);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [max, getPercent]);


    return (
        <div className="multi__range__slider__container" >
            <input
                type="range"
                min={5}
                max={700}
                value={min}
                onChange={handleMinInputRangeSlider}
                className="thumb thumb--left"
                style={{ zIndex: min > MAX - 100 ? 5 : undefined }}
            />
            < input
                type="range"
                min={5}
                max={700}
                value={max}
                onChange={handleMaxInputRangeSlider}
                className="thumb thumb--right"
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
                <div className="slider__left-value">{min}</div>
                <div className="slider__right-value">{max}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
