const fontSizeInputRef = document.querySelector("#font-size-control");
const fontSizeOutputRef = document.querySelector("#text");
fontSizeInputRef.addEventListener("input", (event) => {
	fontSizeOutputRef.style.fontSize = `${event.currentTarget.value}px`;
});
