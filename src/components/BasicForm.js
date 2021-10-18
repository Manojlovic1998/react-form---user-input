import useInput from "../hooks/use-input";


const BasicForm = (props) => {
    // First Name Input Handler

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameInputReset,
    } = useInput(value => value.trim() !== '');

    const nameClasses = !nameHasError ? "form-control" : "form-control invalid";
    //Last Name Input Handler

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameInputReset,
    } = useInput(value => value.trim() !== '');


    const lastNameClasses = !lastNameHasError ? "form-control" : "form-control invalid";
    // Email Input Handler
    const isEmail = (email) => {
        if (email.trim() === '') {
            return false;
        }
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email);
    };

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailInputReset,
    } = useInput(isEmail);

    const emailClasses = !emailHasError ? "form-control" : "form-control invalid";
    // Form Validity Status
    let formIsValid = false;

    formIsValid = nameIsValid && lastNameIsValid && emailIsValid;

    // Form Submit Handler
    const submitFormHandler = (event) => {
        event.preventDefault();

        console.log(enteredName + enteredLastName);
        console.log(enteredEmail);

        // Clear Inputs
        nameInputReset();
        lastNameInputReset();
        emailInputReset();
    };

    return (
        <form onSubmit={submitFormHandler}>
            <div className='control-group'>
                <div className={nameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' onBlur={nameBlurHandler} onChange={nameChangeHandler} value={enteredName}
                           id='name'/>
                    {nameHasError && <small className={"error-text"}>This field must not be empty.</small>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' onBlur={lastNameBlurHandler} onChange={lastNameChangeHandler}
                           value={enteredLastName} id='name'/>
                    {lastNameHasError && <small className={"error-text"}>This field must not be emtpy.</small>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input onBlur={emailBlurHandler} onChange={emailChangeHandler} value={enteredEmail} type='email'
                       id='email'/>
                {emailHasError && <small className={"error-text"}>Invalid email address.</small>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
