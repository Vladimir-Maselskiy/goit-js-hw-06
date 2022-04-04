const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsRef = ingredients.map((ingredient) => {
	const itemEl = document.createElement("li");
	itemEl.textContent = ingredient;
	itemEl.classList.add("item");
	return itemEl;
});

const listOfIngredientsReg = document.querySelector("#ingredients");
listOfIngredientsReg.append(...ingredientsRef);
