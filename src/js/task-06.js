const textInputRef = document.querySelector("#validation-input");
textInputRef.value = "";

textInputRef.addEventListener("blur", (event) => {
	if (textInputRef.classList.contains("valid")) {
		textInputRef.classList.remove("valid");
	}
	textInputRef.classList.add("invalid");
	console.log(event.currentTarget.dataset.length);
	if (
		event.currentTarget.value.length ===
		Number(event.currentTarget.dataset.length)
	)
		textInputRef.classList.replace("invalid", "valid");
});
