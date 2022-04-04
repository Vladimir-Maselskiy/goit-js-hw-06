let counterValue = 0;
const counterValueRef = document.querySelector("#value");
const decrementButtonRef = document.querySelector(
	`button[data-action="decrement"]`
);
const incrementButtonRef = document.querySelector(
	`button[data-action="increment"]`
);

const decrementValue = () => {
	counterValue -= 1;
	counterValueRef.textContent = counterValue;
};

const incrementValue = () => {
	counterValue += 1;
	counterValueRef.textContent = counterValue;
};

decrementButtonRef.addEventListener("click", decrementValue);
incrementButtonRef.addEventListener("click", incrementValue);
