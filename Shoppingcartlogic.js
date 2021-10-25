// Variable to establish quantity. 
let quantity = 1; 

// Below functions, hardcode help with selecting items, on the purchase page. Changing the color and size and making sure, t
// that only one color/size can be selected at once. 
function redToyellow()
{
    document.getElementById('red5').style.backgroundColor="#FFE600";
    document.getElementById('blue5').style.backgroundColor="#FFFFFF";
    document.getElementById('green5').style.backgroundColor="#FFFFFF";

}

function blueToyellow()
{
    document.getElementById('blue5').style.backgroundColor="#FFE600";
    document.getElementById('red5').style.backgroundColor="#FFFFFF";
    document.getElementById('green5').style.backgroundColor="#FFFFFF";

}

function greenToyellow()
{
    document.getElementById('green5').style.backgroundColor="#FFE600";
    document.getElementById('red5').style.backgroundColor="#FFFFFF";
    document.getElementById('blue5').style.backgroundColor="#FFFFFF";

}

function smallToyellow()
{
    document.getElementById('small5').style.backgroundColor="#FFE600";
    document.getElementById('medium5').style.backgroundColor="#FFFFFF";
    document.getElementById('large5').style.backgroundColor="#FFFFFF";

}

function mediumToyellow()
{
    document.getElementById('small5').style.backgroundColor="#FFFFFF";
    document.getElementById('medium5').style.backgroundColor="#FFE600";
    document.getElementById('large5').style.backgroundColor="#FFFFFF";

}

function largeToyellow()
{
    document.getElementById('large5').style.backgroundColor="#FFE600";
    document.getElementById('medium5').style.backgroundColor="#FFFFFF";
    document.getElementById('small5').style.backgroundColor="#FFFFFF";

}


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
function cartNotification()
{
    document.getElementById("Notification").style.opacity = "100";

    if(quantity>1)
    {
        document.getElementById('Notification').innerHTML = `${quantity}`;  
    }

}

