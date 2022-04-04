const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const galleryListRef = document.querySelector(".gallery");

let imagesRef = images.map((image) => {
	const itemRef = document.createElement("li");
	const values = Object.values(image);
	const innerDataStringHTML = `<img class = "gallery-image" src="${values[0]}" alt="${values[1]}" />`;
	itemRef.insertAdjacentHTML("afterbegin", innerDataStringHTML);

	return itemRef;
});

galleryListRef.append(...imagesRef);

// console.log(imagesRef);
