import {useState} from "react";
import Target from "../Components/Target";
import Button from "@mui/material/Button";

const PoissonOrderForm = (props) => {

    const [target, setTarget] = useState(null);
    const [hasTarget, setHasTarget] = useState(false);
    const onSaveTarget = (target) => {
        setTarget(target);
        setHasTarget(true);
    }
    const onSaveOrder = () => {
        const poissonOrder = {
            type: "PoissonOrder",
            target: target
        }
        props.onSaveOrder(poissonOrder);
    }

    return (
        <div>
            <Target onSaveTarget={onSaveTarget}/>
            {hasTarget ? <Button onClick={onSaveOrder} variant={"outlined"}>Save</Button> : null}
        </div>
    )
};
export default PoissonOrderForm;