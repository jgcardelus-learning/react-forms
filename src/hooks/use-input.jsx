import { useState } from "react";

const useInput = (validate) => {
	const [value, setValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const isValid = validate(value);
	const hasError = !isValid && isTouched;

	const valueChangeHandler = (event) => {
		setValue(event.target.value);
		setIsTouched(false);
	};

	const inputBlurHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setValue("");
		setIsTouched(false);
	};

	return {
		value,
		hasError,
		isValid,
		reset,
		valueChangeHandler,
		blurHandler: inputBlurHandler,
	};
};

export default useInput;
