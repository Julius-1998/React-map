import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Global from "../GlobalVariables";
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

                {Object.entries(Global.TERRITORIES).map(([name,properties])=><MenuItem value = {name}>{name}</MenuItem>)}

            </Select>
        </FormControl>
    );
};

export default Target;