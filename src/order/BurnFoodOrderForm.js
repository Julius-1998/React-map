import Button from "@mui/material/Button";

const BurnFoodOrderForm = (props) => {
    const onSaveOrder = () => {
        const degenerateOrder = {
            type: "DegenerateOrder"
        }
        props.onSaveOrder(degenerateOrder);
    }
    return (
        <div>
            <Button onClick={onSaveOrder} variant={"outline"}>Save</Button>
        </div>
    );
};
export default BurnFoodOrderForm;
