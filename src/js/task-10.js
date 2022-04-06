function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getStartValue = (boxRef) => {
	const startValue = {
		width: 30,
		height: 30,
	};
	if (boxRef.children.length > 0) {
		startValue.width = parseInt(boxRef.lastElementChild.style.width) + 10;

		startValue.height = parseInt(boxRef.lastElementChild.style.height) + 10;
	}
	return startValue;
};

const createBoxes = (amount) => {
	const arrayOfDivsRef = [];
	let { width, height } = getStartValue(divBoxRef);
	for (let i = 0; i < amount; i += 1) {
		const divRef = document.createElement("div");
		divRef.style.width = `${width}px`;
		divRef.style.height = `${height}px`;
		divRef.style.backgroundColor = getRandomHexColor();
		arrayOfDivsRef.push(divRef);
		height += 10;
		width += 10;
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
