import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const {useState} = require("react");

const Origin = (props) => {
    const [origin, setOrigin] = useState("");
    const handleChange = (event) => {
        setOrigin(event.target.value);
        props.onSaveOrigin(event.target.value);
    }

    // update territory information
    return (
        <FormControl fullWidth>
            <InputLabel id={"order-origin-prompt-label"}>Origin</InputLabel>
            <Select labelId={"order-origin-prompt-label"} id={"order-origin-selection"} value={origin} label={"order-origin"} onChange={handleChange}>
                <MenuItem value={"Origin Territory 1"}>Origin Territory 1</MenuItem>
                <MenuItem value={"Origin Territory 2"}>Origin Territory 2</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Origin;