import {Button, FormControl, TextField} from "@mui/material";
import React, {useState} from "react";

const Units = (props) => {
    const numberInput = React.useRef(null);
    const [unitsNum, setUnitsNum] = useState(0);
    const [hasNum, setHasNum] = useState(false);
    const [unitsLevel, setUnitsLevel] = useState(0);
    const [hasLevel, setHasLevel] = useState(false);
    const handleLevelInput = (event) => {
        setHasLevel(true);
        setUnitsLevel(event.target.value);
    }
    const handleNumInput = (event) => {
        setHasNum(true);
        setUnitsNum(event.target.value);
    }

    const handleConfirm = () => {
        setHasNum(false);
        setHasLevel(false);
        const units = {
            level: unitsLevel,
            num: unitsNum
        }
        numberInput.current.value = null;
        setUnitsNum(undefined);
        props.onSaveUnits(units);
    }
    // update the range of levels and unit numbers with risk map information
    return (
        <FormControl fullWidth>
            <TextField id={"unit-level-input"} inputRef={numberInput} type={"number"} InputProps={{inputProps: {max:10, min:1}}} label={"Unit Level"} variant={"standard"} onChange={handleLevelInput} fullWidth/>
            {hasLevel ? <TextField id={"unit-num-input"} type={"number"} InputProps={{inputProps: {max:10, min:0}}} label={"Unit Num"} variant={"standard"} onChange={handleNumInput} fullWidth/> : null }
            {(hasNum && hasLevel) ?<Button variant={"outlined"} onClick={handleConfirm} sx={{mt: 1}} fullWidth>Confirm</Button> : null}
        </FormControl>
    )
}

export default Units;