// Variable to establish quantity. 
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
    // let red = document.getElementById('red5')
    // let blue = document.getElementById('blue5')
    // let green = document.getElementById('green5')
    red.style.backgroundColor="#FFFFFF";
    blue.style.backgroundColor="#FFFFFF";
    green.style.backgroundColor="#FFFFFF";
    document.getElementById(goalColorID).style.backgroundColor="#FFE600";
}

function toNewSize(goalSizeID){
    // let small = document.getElementById('small5')
    // let medium = document.getElementById('medium5')
    // let large = document.getElementById('large5')
    small.style.backgroundColor="#FFFFFF";
    medium.style.backgroundColor="#FFFFFF";
    large.style.backgroundColor="#FFFFFF";
    document.getElementById(goalSizeID).style.backgroundColor="#FFE600"

}


// function redToyellow()
// {
//     document.getElementById('red5').style.backgroundColor="#FFE600";
//     document.getElementById('blue5').style.backgroundColor="#FFFFFF";
//     document.getElementById('green5').style.backgroundColor="#FFFFFF";

// }

// function blueToyellow()
// {
//     document.getElementById('blue5').style.backgroundColor="#FFE600";
//     document.getElementById('red5').style.backgroundColor="#FFFFFF";
//     document.getElementById('green5').style.backgroundColor="#FFFFFF";

// }

// function greenToyellow()
// {
//     document.getElementById('green5').style.backgroundColor="#FFE600";
//     document.getElementById('red5').style.backgroundColor="#FFFFFF";
//     document.getElementById('blue5').style.backgroundColor="#FFFFFF";

// }

// function smallToyellow()
// {
//     document.getElementById('small5').style.backgroundColor="#FFE600";
//     document.getElementById('medium5').style.backgroundColor="#FFFFFF";
//     document.getElementById('large5').style.backgroundColor="#FFFFFF";

// }

// function mediumToyellow()
// {
//     document.getElementById('small5').style.backgroundColor="#FFFFFF";
//     document.getElementById('medium5').style.backgroundColor="#FFE600";
//     document.getElementById('large5').style.backgroundColor="#FFFFFF";

// }

// function largeToyellow()
// {
//     document.getElementById('large5').style.backgroundColor="#FFE600";
//     document.getElementById('medium5').style.backgroundColor="#FFFFFF";
//     document.getElementById('small5').style.backgroundColor="#FFFFFF";

// }


// This function updates the quantity value depending on whether you add or subtract. It also shows feedforward and less opacity
// When your value is not reachable. 
function updateQuantity(){
document.getElementById('changequantitytext').innerHTML = `Quantity: ${quantity}`;
if(quantity == 1){
    document.getElementById("minus").classList.add("buttondisabled");
}
else{
    document.getElementById("minus").classList.remove("buttondisabled");
}
if(quantity == 10){
    document.getElementById("plus").classList.add("buttondisabled");
}
else{
    document.getElementById("plus").classList.remove("buttondisabled");
}
}
// The quantity value cannot extent 10
function increaseQuantity(){
    if (quantity >= 1 &&  quantity < 10){
    quantity++;
    }
    updateQuantity();

}
    
// The quantity value cannot be below 1
function decreaseQuantity(){
    if (quantity>1)
    {
    quantity--;
    }
    updateQuantity();
}

// For the cart if you select the options and select add to cart it will provide you with a notification on how many items have
// Populated your cart 

const addToCart = document.getElementById('AddtoCart');

addToCart.addEventListener('click',()=>{
    document.getElementById("Notification").style.opacity = "1";

if(quantity>1)
{
    document.getElementById('Notification').innerHTML = `${quantity}`;  
}});







