const loginFormRef = document.querySelector(".login-form");

const isAllFieldsAreFilled = (args) => {
	for (const arg of args) {
		if (arg.value === "") {
			return false;
		}
	}
	return true;
};

const createObject = (elementRef) => {
	const userData = {};
	const argsOfElentRef = elementRef.elements;
	for (const node of argsOfElentRef) {
		if (node.tagName === "INPUT") {
			userData[node.name] = node.value;
		}
	}
	console.log(userData);
	return userData;
};

const resetDataInForm = (elementRef) => {
	elementRef.reset();
};

loginFormRef.addEventListener("submit", (event) => {
	event.preventDefault();
	const argsRef = event.currentTarget.querySelectorAll("input");
	if (!isAllFieldsAreFilled(argsRef)) {
		alert("все поля должны быть заполнены");
	} else {
		createObject(event.currentTarget);
		resetDataInForm(event.currentTarget);
	}
});
