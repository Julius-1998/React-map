import React, {useState} from "react";
import {Button, FormControl, TextField} from "@mui/material";

const LevelUpgrade = (props) => {
    const [targetLevel, setTargetLevel] = useState(null);
    const [hasTargetLevel, setHasTargetLevel] = useState(false);

    const handleTargetLevel = (event) => {
        setTargetLevel(event.target.value);
        setHasTargetLevel(true);
    }

    const handleConfirm = () => {
        setHasTargetLevel(false);
        // TODO: if tech upgrade, set a default value for originLevel
        props.onSaveLevelUpgrade(targetLevel);
    }
    // TODO: update the range of options
    return (
        <FormControl fullWidth>
             <TextField id={"target-level-input"} type={"number"} InputProps={{inputProps: {max:7, min:1}}} label={"Target Level"} variant={"standard"} onChange={handleTargetLevel} fullWidth/>
            {(hasTargetLevel) ?<Button variant={"outlined"} onClick={handleConfirm} sx={{mt: 1}} fullWidth>Confirm</Button> : null}
        </FormControl>
    );
};
export default LevelUpgrade;