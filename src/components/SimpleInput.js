import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: nameValue,
		hasError: nameHasError,
		isValid: nameIsValid,
		valueChangeHandler: nameChangeHandler,
		blurHandler: nameBlurHandler,
		reset: nameReset,
	} = useInput((data) => data.trim() !== "");

	const {
		value: emailValue,
		hasError: emailHasError,
		isValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput((data) => data.includes("@") && data.includes("."));

	const formIsValid = nameIsValid && emailIsValid;

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		nameReset();
		emailReset();
	};

	const nameInputClasses = `form-control ${nameHasError ? "invalid" : ""}`;
	const emailInputClasses = `form-control ${emailHasError ? "invalid" : ""}`;
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onBlur={nameBlurHandler}
					onChange={nameChangeHandler}
					value={nameValue}
				/>
				{nameHasError && (
					<p className="error-text">Name should not be empty.</p>
				)}
			</div>

			<div className={emailInputClasses}>
				<label htmlFor="name">Your email</label>
				<input
					type="email"
					id="email"
					onBlur={emailBlurHandler}
					onChange={emailChangeHandler}
					value={emailValue}
				/>
				{emailHasError && (
					<p className="error-text">Email should not be empty.</p>
				)}
			</div>

			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
