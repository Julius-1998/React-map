import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const {useState} = require("react");
const Target = (props) => {
    const [target, setTarget] = useState("");
    const handleChange = (event) => {
        setTarget(event.target.value);
        props.onSaveTarget(event.target.value);
    }

    // update territory information
    return (
        <FormControl fullWidth>
            <InputLabel id={"order-target-prompt-label"}>Target</InputLabel>
            <Select labelId={"order-target-prompt-label"} id={"order-target-selection"} value={target} label={"order-taget"} onChange={handleChange}>
                <MenuItem value={"Target Territory 1"}>Target Territory 1</MenuItem>
                <MenuItem value={"Target Territory 2"}>Target Territory 2</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Target;