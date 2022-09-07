import React, { useCallback, useState } from "react";
import RangeSliderRN from "rn-range-slider";
import Rail from "./Rail";
import RailSelected from "./RailSelected";
import Thumb from "./Thumb";

const RangeSlider = ({ from, to }) => {
    const [low, setLow] = useState(from);
    const [high, setHigh] = useState(to);
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);

    const handleValueChange = useCallback(
        (newLow, newHigh) => {
            setLow(newLow);
            setHigh(newHigh);
        },
        [setLow, setHigh]
    );

    return (
        <RangeSliderRN
            min={from}
            max={to}
            step={1}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            onValueChanged={handleValueChange}
        />
    );
};

export default RangeSlider;