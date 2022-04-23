import {useState} from "react";
import Target from "../Components/Target";
import Button from "@mui/material/Button";

const NuclearWeaponOrderForm = (props) => {

    const [target, setTarget] = useState(null);
    const [hasTarget, setHasTarget] = useState(false);
    const onSaveTarget = (target) => {
        setTarget(target);
        setHasTarget(true);
    }
    const onSaveOrder = () => {
        const nuclearWeaponOrder = {
            type: "NuclearWeaponOrder",
            target: target
        }
        props.onSaveOrder(nuclearWeaponOrder);
    }

    return (
        <div>
            <Target onSaveTarget={onSaveTarget}/>
            {hasTarget ? <Button onClick={onSaveOrder} variant={"outlined"}>Save</Button> : null}
        </div>
    )
};
export default NuclearWeaponOrderForm;
