import {useState} from "react";
import LevelUpgrade from "../Components/LevelUpgrade";
import Button from "@mui/material/Button";

const TechUpgradOrderForm = (props) => {

    const [targetLevel, setTargetLevel] = useState(null);
    const [hasTargetLevel, setHasTargetLevel] = useState(false);
    const onSaveTargetLevel = (targetLevel) => {
        setTargetLevel(targetLevel);
        setHasTargetLevel(true);
    }
    const onSaveOrder = () => {
        const techUpgradeOrder = {
            type: "TechUpgradeOrder",
            targetLevel: targetLevel
        }
        props.onSaveOrder(techUpgradeOrder);
    }

    return (
        <div>
            <LevelUpgrade onSaveLevelUpgrade={onSaveTargetLevel}/>
            {hasTargetLevel ? <Button onClick={onSaveOrder} variant={"outlined"}>Save</Button> : null}
        </div>
    )

};
export default TechUpgradOrderForm;