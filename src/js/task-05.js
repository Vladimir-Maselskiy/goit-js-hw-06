const inputTextRef = document.querySelector("#name-input");
inputTextRef.value = "";
const textOutputRef = document.querySelector("#name-output");
inputTextRef.addEventListener("input", (event) => {
	event.currentTarget.value !== ""
		? (textOutputRef.textContent = event.currentTarget.value)
		: (textOutputRef.textContent = "Anonymous");
});
