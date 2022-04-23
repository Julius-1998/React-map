import {useState} from "react";
import Origin from "../Components/Origin";
import LevelUpgrade from "../Components/LevelUpgrade";
import Units from "../Components/Units";
import Button from "@mui/material/Button";

const UnitsUpgradeOrderForm = (props)=> {
    const [origin, setOrigin] = useState(null);
    const [hasOrigin, setHasOrigin] = useState(false);
    const [units, setUnits] = useState(null);
    const [hasUnits, setHasUnits] = useState(null);
    const [targetLevel, setTargetLevel] = useState(null);
    const [hasTargetLevel, setHasTargetLevel] = useState(false);

    const onSaveOrigin = (origin) => {
        setOrigin(origin);
        setHasOrigin(true);
    }

    const onSaveTargetLevel = (targetLevel) => {
        setTargetLevel(targetLevel);
        setHasTargetLevel(true);
    }
    const onConfirmUnits = (units) => {
        const updatedUnits = {
            level: units.level,
            num: units.num
        }
        setUnits(updatedUnits);
        setHasUnits(true);
    }

    const onSaveOrder = () => {
        const UnitsUpgradeOrder = {
            type: "UnitsUpgradeOrder",
            source: origin,
            originalLevel: units.level,
            targetLevel: targetLevel,
            unitNum: units.num
        }
        props.onSaveOrder(UnitsUpgradeOrder);
    }

    return (
        <div>
            <Origin onSaveOrigin={onSaveOrigin}/>
            {hasOrigin && !hasUnits ? <Units onSaveUnits={onConfirmUnits}/>:null}
            {hasUnits ? <p>Confirmed Units: </p> : null}
            {hasUnits ? <p>{"level: " + units.level + ", number: " + units.num + ";"}</p> : null}
            {hasUnits ? <LevelUpgrade onSaveLevelUpgrade={onSaveTargetLevel}/>:null}
            {(hasUnits && hasTargetLevel) ? <Button onClick={onSaveOrder} variant={"Outlined"}>Save</Button> : null}
        </div>
    );
};
export default UnitsUpgradeOrderForm;