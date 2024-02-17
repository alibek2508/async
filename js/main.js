const titleImg = document.querySelector(".title");
const img = document.querySelector(".img");
const author = document.querySelector(".author");
const btn = document.querySelector("button");

btn.addEventListener("click", handleReload);
function handleReload() {
	window.location.reload();
}

async function imgGenerator() {
	try {
		let response = await fetch(`https://meme-api.com/gimme/wholesomememes`);
		let content = await response.json();
		titleImg.textContent = content.title;
		img.setAttribute("src", content.url);
		author.textContent = content.author;
	} catch (err) {
		console.error(err);
	}
}
imgGenerator();
