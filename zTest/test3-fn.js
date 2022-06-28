document.addEventListener('click', (e) => {
	var itemName = e.target.classList.item(0);
	console.log(itemName);
	if(itemName == "instantMemoryTest"){
		console.log("aa");
	} else {
		console.log("bb");
	}
});