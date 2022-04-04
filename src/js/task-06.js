const textInputRef = document.querySelector("#validation-input");
textInputRef.value = "";
textInputRef.addEventListener("blur", (event) => {
	if (textInputRef.classList.contains("valid")) {
		textInputRef.classList.remove("valid");
	}
	textInputRef.classList.add("invalid");
	if (event.currentTarget.value.length === 6)
		textInputRef.classList.replace("invalid", "valid");
});
