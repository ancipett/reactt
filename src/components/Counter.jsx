import { useState } from "react";
import CustomButton from './CustomButton.jsx';

const Counter = (props) => {
    const {totalCounter, changeTotal, setCounterArray, index, counterArray, showKey} = props;
    const [clicks, setCounter] = useState({count: 0}); 
    
    const decreaseCounter = () => {
        clicks.count = clicks.count - 1;
        setCounter({...clicks});
        changeTotal();  
    }
    const increaseCounter = () => {
        clicks.count = clicks.count + 1;
        setCounter({...clicks});
        changeTotal();  
    }
    const removeCounter = () => {
        counterArray.splice(index,1);
        setCounterArray([...counterArray]);
    }

    return (
        <div >
            ID: {showKey} Clicks: {clicks.count} / {totalCounter}
            <CustomButton onClick = {decreaseCounter} label={'-'}/>
            <CustomButton onClick = {increaseCounter} label={'+'}/>
            <CustomButton onClick = {removeCounter} label={'remove'}/>
        </div>
    )
}

export default Counter;
