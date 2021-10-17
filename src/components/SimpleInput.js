import {useRef, useState} from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    const nameInputRef = useRef();

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName('');
    };

    const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} onChange={nameInputChangeHandler} value={enteredName} type='text' id='name'/>
            </div>
            {!enteredNameIsValid && <p className={"error-text"}>Name must not be empty.</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
