const listOfCategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategoriesRef.length}\n\n`);
[...listOfCategoriesRef].forEach((itemOfCategoriesRef) => {
	console.log(`Category: ${itemOfCategoriesRef.firstElementChild.textContent}`);
	console.log(
		`Elements: ${itemOfCategoriesRef.lastElementChild.children.length}\n\n`
	);
});
