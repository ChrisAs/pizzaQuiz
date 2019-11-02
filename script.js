const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

const form = document.querySelector('form');

const randResult =  function (array)  {
 const randomNumber = Math.floor(Math.random() * array.length)
 return array [randomNumber];
}

form.addEventListener('submit', function (e) {
	// PREVENTS REFRESH OF PAGE
	e.preventDefault()
// TURNING USER SELECTIONS INTO VARIABLES
	const userSizeSelection = document.querySelector("input[name='size']:checked").value;
	const userPriceSelection = document.querySelector("input[name='price']:checked").value;


	const sizeMatch = pizza[userSizeSelection];
	
	const filteredSelection = sizeMatch.filter(function(pizzaShop) {
		console.log(pizzaShop)
		if(pizzaShop.price === userPriceSelection){
			return true;
		}
	})
	console.log(sizeMatch);
	const theOne = randResult(filteredSelection)
	const htmlToAdd = `
	<h2>You should go to <span class="restaurant">${theOne.title}</span></h2>
	`
	// REWRITES HTML
	document.querySelector('.results').innerHTML = htmlToAdd;
	console.log(theOne)
})


// VANILLA JS DOC READY
// if(document.readyState === "complete"){
// 	pizzaProphetInit();

// } else {
// 	Document.addEventListener('DOMContentLoaded', pizzaProphetInit)
// }
