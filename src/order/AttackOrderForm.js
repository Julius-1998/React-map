import {Button} from "@mui/material";
import React, {useState} from "react";
import Origin from "../Components/Origin";
import Units from "../Components/Units";
import Target from "../Components/Target";

const AttackOrderForm = (props) => {
    const [origin, setOrigin] = useState("");
    const [hasOrigin, setHasOrigin] = useState(false);
    const [target, setTarget] = useState("");
    const [hasTarget, setHasTarget] = useState(false);
    const [units, setUnits] = useState([]);
    const [hasUnits, setHasUnits] = useState(false);

    const onConfirmUnits = (data) => {
        const updatedData = [
            ...units,
            data
        ]
        setUnits(updatedData);
        setHasUnits(true);
    }
    const onSaveOrigin = (origin) => {
        setOrigin(origin);
        setHasOrigin(true);
    }
    const onSaveTarget = (target) => {
        setTarget(target);
        setHasTarget(true);
    }
    const onSaveOrder = () => {
        const attackOrder = {
            type: "AttackOrder",
            origin: origin,
            units: units,
            target: target
        }
        props.onSaveOrder(attackOrder);
    }
    // show the confirmed units information
    const confirmedUnits = units.map(unit => (
        <p>{"level: " + unit.level + ", number: " + unit.num + ";"}</p>
    ))
    return (
        <div>
            <Origin onSaveOrigin={onSaveOrigin}/>
            {(units.length === 0) ? null : <p>Confirmed Units: </p>}
            { confirmedUnits }
            {hasOrigin ? <Units onSaveUnits={onConfirmUnits} units={units}/> : null}
            {(hasOrigin && hasUnits) ? <Target onSaveTarget={onSaveTarget}/> : null}
            {(hasOrigin && hasUnits && hasTarget) ? <Button onClick={onSaveOrder} variant={"Outlined"}>Save</Button> : null}
        </div>
    );
};

export default AttackOrderForm;