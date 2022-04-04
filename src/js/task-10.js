function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
	const arrayOfDivsRef = [];
	let startWidth = 30;
	let startHeight = 30;
	for (let i = 0; i < amount; i += 1) {
		const divRef = document.createElement("div");
		divRef.style.width = `${startWidth}px`;
		divRef.style.height = `${startHeight}px`;
		divRef.style.backgroundColor = getRandomHexColor();
		startHeight += 10;
		startWidth += 10;
		arrayOfDivsRef.push(divRef);
	}
	inputRef.value = "";
	return arrayOfDivsRef;
};

const destroyBoxes = () => {
	divBoxRef.innerHTML = "";
};

const inputRef = document.querySelector("input");
const createButtonRef = document.querySelector("button[data-create]");
const destroyButtonRef = document.querySelector("button[data-destroy]");
const divBoxRef = document.querySelector("#boxes");

createButtonRef.addEventListener("click", () => {
	divBoxRef.append(...createBoxes(inputRef.value));
});

destroyButtonRef.addEventListener("click", destroyBoxes);
