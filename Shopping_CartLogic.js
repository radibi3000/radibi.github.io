const storedValue1 = JSON.parse(localStorage.getItem("MyDetails"));
const cartArray = storedValue1 ? storedValue1 : [];
const cartDiv = document.getElementById('cart-container');
function showProductInCart(product) {
	let program1 = '<div class = "cart-grid"><div class="cart-item c1">'+ product.name +'</div><div class="cart-item c2">'+product.color+'</div><div class="cart-item c3">'+product.size+'</div><div class="cart-item c4">'+product.quantity+'</div><div class="cart-item c5">'+product.price+'</div><div class="cart-item c6">Delete</div></div>';
	document.getElementById("cart-container").innerHTML += program1; 
}
for (let i = 0; i < cartArray.length; i++) {
    // cartArray[i].id = i+1; 
	showProductInCart(cartArray[i]);
}




