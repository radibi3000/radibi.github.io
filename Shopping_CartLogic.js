// Getting the local storage value
const storedValue1 = JSON.parse(localStorage.getItem("MyDetails"));
const cartArray = storedValue1 ? storedValue1 : [];
const cartDiv = document.getElementById('cart-container');
// Showing the product in the cart
function showSpecificProductInCart(product) {
	let program1 = '<div class = "cart-grid"><div class="cart-item c1">' + product.name + '</div><div class="cart-item c2">' + product.color + '</div><div class="cart-item c3">' + product.size + '</div><div class="cart-item c4">' + product.quantity + '</div><div class="cart-item c5">' + product.price + '</div><div class="cart-item c6">Delete</div></div>';
	document.getElementById("cart-container").innerHTML += program1;
}
for (let i = 0; i < cartArray.length; i++) {
	showSpecificProductInCart(cartArray[i]);
}
let deleteButtons = document.getElementsByClassName("c6");

// Deleting the buttons in the cart
for (let i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", (event) => {
		console.log(event.target)
		event.target.parentNode.parentNode.removeChild(event.target.parentNode)
		localStorage.removeItem("MyDetails");
	})
}