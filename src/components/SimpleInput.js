import {useRef, useState} from 'react';

const SimpleInput = (props) => {
    // Form States
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    // Name Input Reference
    const nameInputRef = useRef();


    // On Input Change Handler
    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };


    // When Form Is Submitted Handler
    const formSubmissionHandler = event => {
        event.preventDefault();
        // All inputs are treated as touched once form is sub..
        setEnteredNameTouched(true);

        // Simple validation of input data (Dummy validation)
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        // Form input is valid
        setEnteredNameIsValid(true);

        // Reference is used to extract and log the input]
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName('');
    };


    // Display info logic based on validity..
    const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
    const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} onChange={nameInputChangeHandler} value={enteredName} type='text' id='name'/>
            </div>
            {nameInputIsInvalid && <p className={"error-text"}>Name must not be empty.</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
