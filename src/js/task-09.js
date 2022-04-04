function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const colorValueTextRef = document.querySelector(".color");
const changeColorButtonRef = document.querySelector(".change-color");
changeColorButtonRef.addEventListener("click", () => {
	bodyRef.style.backgroundColor = getRandomHexColor();
	colorValueTextRef.textContent = getRandomHexColor();
});
