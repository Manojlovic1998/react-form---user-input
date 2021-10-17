import {useState} from 'react';

const SimpleInput = (props) => {
    // Form States
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const enteredNameIsValid = enteredName.trim() !== '';
    const enteredEmailIsValid = isEmail(enteredEmail);
    const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
    const emailInputIsInvalid = enteredEmailTouched && !enteredEmailIsValid;
    const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
    const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid';

    // Email Input <---------
    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };

    function isEmail(email) {
        if (email.trim() === '') {
            return false;
        }
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return (reg.test(email.trim()));
    }


    const emailInputChangeHandler = (event) => {
        setEnteredEmailTouched(true);
        setEnteredEmail(event.target.value);
    };

    // Name Input <----------
    const nameInputChangeHandler = event => {
        setEnteredNameTouched(true);
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // Form Submission <---------
    const formSubmissionHandler = event => {
        event.preventDefault();
        // All inputs are treated as touched once form is sub..
        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if (!enteredNameIsValid) {
            return;
        }


        console.log(enteredEmail.trim());
        console.log(enteredName.trim());
        setEnteredName('');
        setEnteredEmail('');
        setEnteredNameTouched(false);
        setEnteredEmailTouched(false);
    };


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onChange={nameInputChangeHandler} value={enteredName}
                       onBlur={nameInputBlurHandler} type='text' id='name'/>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Age</label>
                <input type='email' value={enteredEmail} onChange={emailInputChangeHandler}
                       onBlur={emailInputBlurHandler} id='email'/>
            </div>
            {emailInputIsInvalid && <p className={"error-text"}>Email is not valid.</p>}
            {nameInputIsInvalid && <p className={"error-text"}>Name must not be empty.</p>}
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
