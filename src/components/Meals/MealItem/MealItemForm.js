import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => { 
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmoutNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmoutNumber < 1 || enteredAmoutNumber > 5) { 
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmoutNumber);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}/>
            <button>+ Add</button>
            { !amountIsValid && <p>Please enter amount [1-5] only.</p>}
        </form>
    );
 };

export default MealItemForm