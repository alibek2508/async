const titleImg = document.querySelector(".title");
const img = document.querySelector(".img");
const author = document.querySelector(".author");
const btn = document.querySelector("button");

btn.addEventListener("click", imgGenerator);

async function imgGenerator() {
	loader.style.display = "block";
	titleImg.style.display = "none";
	img.style.display = "none";
	author.style.display = "none";

	try {
		let response = await fetch(`https://meme-api.com/gimme/wholesomememes`);
		let content = await response.json();
		titleImg.textContent = content.title;
		img.setAttribute("src", content.url);
		author.textContent = content.author;
		img.onload = () => (loader.style.display = "none");
		titleImg.style.display = "block";
		img.style.display = "block";
		author.style.display = "block";
	} catch (err) {
		console.error(err);
		loader.style.display = "none";
	}
}
imgGenerator();
