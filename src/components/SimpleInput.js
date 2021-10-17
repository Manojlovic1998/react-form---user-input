import {useState} from 'react';

const SimpleInput = (props) => {
    // Form States
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

    // On Input Change Handler
    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };


    // When Form Is Submitted Handler
    const formSubmissionHandler = event => {
        event.preventDefault();
        // All inputs are treated as touched once form is sub..
        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return
        }

        console.log(enteredName);
        setEnteredName('');
        setEnteredNameTouched(false);
    };


    // Display info logic based on validity..
    const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onChange={nameInputChangeHandler} value={enteredName}
                       onBlur={nameInputBlurHandler} type='text' id='name'/>
            </div>
            {nameInputIsInvalid && <p className={"error-text"}>Name must not be empty.</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
