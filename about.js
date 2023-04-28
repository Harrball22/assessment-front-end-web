console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckImage = document.querySelector("img")

duckImage.addEventListener("mouseover", () => {alert("You did it! Yay!")})