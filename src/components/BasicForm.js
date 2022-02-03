import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		value: nameValue,
		hasError: nameHasError,
		isValid: nameIsValid,
		valueChangeHandler: nameChangeHandler,
		blurHandler: nameBlurHandler,
		reset: nameReset,
	} = useInput((data) => data.trim() !== "");

	const {
		value: surnameValue,
		hasError: surnameHasError,
		isValid: surnameIsValid,
		valueChangeHandler: surnameChangeHandler,
		blurHandler: surnameBlurHandler,
		reset: surnameReset,
	} = useInput((data) => data.trim() !== "");

	const {
		value: emailValue,
		hasError: emailHasError,
		isValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput((data) => data.includes("@") && data.includes("."));

	const formIsValid = nameIsValid && surnameIsValid && emailIsValid;

	const formSubmitHandler = () => {
		if (!formIsValid) {
			return;
		}

		nameReset();
		surnameReset();
		emailReset();
	};

	const getInputClasses = (hasErrors) => {
		return hasErrors ? "form-control invalid" : "form-control";
	};

	const nameInputClasses = getInputClasses(nameHasError);
	const surnameInputClasses = getInputClasses(surnameHasError);
	const emailInputClasses = getInputClasses(emailHasError);

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={nameInputClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						value={nameValue}
						onChange={nameChangeHandler}
						onBlur={nameBlurHandler}
					/>
					{nameHasError && (
						<p className="error-text">Please enter your name</p>
					)}
				</div>
				<div className={surnameInputClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						value={surnameValue}
						onChange={surnameChangeHandler}
						onBlur={surnameBlurHandler}
					/>
					{surnameHasError && (
						<p className="error-text">Please enter your surname</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					value={emailValue}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && (
					<p className="error-text">Please enter your email</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
