// Global Variables. 
let quantity = 1;
let color = 0;
let red = document.getElementById('red5')
let blue = document.getElementById('blue5')
let green = document.getElementById('green5')
let small = document.getElementById('small5')
let medium = document.getElementById('medium5')
let large = document.getElementById('large5')




// Below functions, hardcode help with selecting items, on the purchase page. Changing the color and size and making sure, t
// that only one color/size can be selected at once. 
function toNewColor(goalColorID) {
    red.style.backgroundColor = "#FFFFFF";
    blue.style.backgroundColor = "#FFFFFF";
    green.style.backgroundColor = "#FFFFFF";
    document.getElementById(goalColorID).style.backgroundColor = "#fad980";
}

function toNewSize(goalSizeID) {
    small.style.backgroundColor = "#FFFFFF";
    medium.style.backgroundColor = "#FFFFFF";
    large.style.backgroundColor = "#FFFFFF";
    document.getElementById(goalSizeID).style.backgroundColor = "#fad980"
}



// This function updates the quantity value depending on whether you add or subtract. It also shows feedforward and less opacity
// When your value is not reachable. 
function updateQuantity() {
    document.getElementById('changequantitytext').innerHTML = `Quantity: ${quantity}`;
    if (quantity == 1) {
        document.getElementById("minus").classList.add("buttondisabled");
    } else {
        document.getElementById("minus").classList.remove("buttondisabled");
    }
    if (quantity == 10) {
        document.getElementById("plus").classList.add("buttondisabled");
    } else {
        document.getElementById("plus").classList.remove("buttondisabled");
    }
}
// The quantity value cannot extent 10
function increaseQuantity() {
    if (quantity >= 1 && quantity < 10) {
        quantity++;
    }
    updateQuantity();
    changeprice();

}

// The quantity value cannot be below 1
function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
    }
    updateQuantity();
    changeprice();
}

// For the cart if you select the options and select add to cart it will provide you with a notification on how many items have
// Populated your cart 

const addToCart = document.getElementById('AddtoCart');

addToCart.addEventListener('click', () => {
    document.getElementById("Notification").style.opacity = "1";

    if (quantity >= 1) {
        document.getElementById('Notification').innerHTML = `${quantity}`;
    }
});


// To remove items from the cart

// This function uses the background color of the HTML file to notify the object of what specific size was selected. 

function getsize() {

    var newsize = document.getElementsByClassName('newSize')[0]
    var map
    var children = Array.from(newsize.getElementsByTagName('p'));


    for (var i = 0; i < children.length; i++) {
        console.log(i, children[i].style)
        if (children[i].style.backgroundColor == "rgb(250, 217, 128)") {
            map = i
        }
    }
    if (map == 0) {
        return "Small"
    } else if (map == 1)
        return "Medium"
    else if (map == 2)
        return "Large"
}
// This function uses the background color of the HTML file to notify the object of what specific color was selected. 
function getcolor() {

    var newColor = document.getElementsByClassName('newColor')[0]
    var map1
    var children = Array.from(newColor.getElementsByTagName('p'));



    for (var i = 0; i < children.length; i++) {
        if (children[i].style.backgroundColor == "rgb(250, 217, 128)") {
            map1 = i
        }
    }
    if (map1 == 0) {
        return "Red"
    } else if (map1 == 1)
        return "Blue"
    else if (map1 == 2)
        return "Green"
}
// Creates the cartItem object
function cartItem(pillowName, pillowQuantity, pillowColor, pillowSize, pillowPrice) {
    this.name = pillowName;
    this.quantity = pillowQuantity;
    this.color = pillowColor;
    this.size = pillowSize;
    this.price = pillowPrice;
}
// Sets up Local Storage. 
let storedValue = JSON.parse(localStorage.getItem("MyDetails"));
let cart = storedValue ? storedValue : [];

// pushing the array to local storage.
function selectItems() {
    let name = document.getElementById("standardcouchpillowFinal").innerHTML;
    let quantity = parseInt(document.getElementById("changequantitytext").innerHTML.replace('Quantity: ', ''));
    let size = getsize();
    let color = getcolor();
    let price = parseFloat(document.getElementById("pricetagtext").innerHTML);
    let pillows = new cartItem(name, quantity, color, size, price);
    cart.push(pillows);
    var jsonDetails = JSON.stringify(cart);
    localStorage.setItem("MyDetails", jsonDetails);
}
// Augments the pricevalue depending on the quantity. 
function changeprice() {
    var priceValue = 0.00;

    console.log(document.getElementById("standardcouchpillowFinal").innerHTML)
    if (document.getElementById("standardcouchpillowFinal").innerHTML.trim() == 'Standard Couch Pillow') {
        priceValue = 28.99
    } else if (document.getElementById("standardcouchpillowFinal").innerHTML.trim() == 'Bed Pillow') {
        priceValue = 39.99
    } else if (document.getElementById("standardcouchpillowFinal").innerHTML.trim() == 'Round Pillow') {
        priceValue = 15.49
    } else if (document.getElementById("standardcouchpillowFinal").innerHTML.trim() == 'Floor Poof Pillow') {
        priceValue = 24.99
    }

    if (quantity >= 1) {
        priceValue = (priceValue * quantity).toFixed(2)
        console.log(priceValue)
        document.getElementById("pricetagtext").innerHTML = priceValue

    }




}