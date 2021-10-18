import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    // Name Input <----------
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput(value => value.trim() !== '');

    const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid';

    // Email Input <---------
    function isEmail(email) {
        if (email.trim() === '') {
            return false;
        }
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return (reg.test(email.trim()));
    }

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(isEmail);

    const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid';

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // Form Submission <---------
    const formSubmissionHandler = event => {
        event.preventDefault();
        // All inputs are treated as touched once form is sub..

        if (!enteredNameIsValid) {
            return;
        }


        console.log(enteredEmail.trim());
        console.log(enteredName.trim());

        resetNameInput();
        resetEmailInput();
    };


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onChange={nameChangeHandler} value={enteredName}
                       onBlur={nameBlurHandler} type='text' id='name'/>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' value={enteredEmail} onChange={emailChangeHandler}
                       onBlur={emailBlurHandler} id='email'/>
            </div>
            {emailInputHasError && <p className={"error-text"}>Email is not valid.</p>}
            {nameInputHasError && <p className={"error-text"}>Name must not be empty.</p>}
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
