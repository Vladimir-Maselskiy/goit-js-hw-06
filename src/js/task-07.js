const fontSizeInputRef = document.querySelector("#font-size-control");
const fontSizeOutputRef = document.querySelector("#text");
fontSizeInputRef.addEventListener("change", (event) => {
	fontSizeOutputRef.style.fontSize = `${event.currentTarget.value}px`;
});
