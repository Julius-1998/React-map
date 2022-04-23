import Button from "@mui/material/Button";

const BurnFoodOrderForm = (props) => {
    const onSaveOrder = () => {
        const burnFoodOrder = {
            type: "BurnFoodOrder"
        }
        props.onSaveOrder(burnFoodOrder);
    }
    return (
        <div>
            <Button onClick={onSaveOrder} variant={"outline"}>Save</Button>
        </div>
    );
};
export default BurnFoodOrderForm;
