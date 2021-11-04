/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.standardcouchpillowphoto')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

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
    red.style.backgroundColor="#FFFFFF";
    blue.style.backgroundColor="#FFFFFF";
    green.style.backgroundColor="#FFFFFF";
    document.getElementById(goalColorID).style.backgroundColor="#fad980";
}

function toNewSize(goalSizeID){
    small.style.backgroundColor="#FFFFFF";
    medium.style.backgroundColor="#FFFFFF";
    large.style.backgroundColor="#FFFFFF";
    document.getElementById(goalSizeID).style.backgroundColor="#fad980"

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

const addToCart = document.getElementById('AddtoCart');

addToCart.addEventListener('click',()=>{
    document.getElementById("Notification").style.opacity = "1";

if(quantity>=1)
{
    document.getElementById('Notification').innerHTML = `${quantity}`;  
}});


// To remove items from the cart

var removeCartItem = document.getElementsByClassName('Remove');

for (var i =0; i < removeCartItem.length; i++){
    var button = removeCartItem[i]
    button.addEventListener('click', function(event)
    {
     var buttonClicked = event.target
     buttonClicked.parentElement.remove();
    })
}

function getsize(){

var newsize = document.getElementsByClassName('newSize')
var map

for(var i = 0; i < newsize.length; i++){
        if(newsize[i].style.backgroundColor == "#fad980"){
            map = i
        }
    }
    if (map == 0){
        return "Small"
    }
    else if (map == 1 )
        return "Medium"
    else if (map == 2)
        return "Large"
}

function getcolor(){

    var newColor = document.getElementsByClassName('newColor')
    var map1
    
    for(var i = 0; i < newColor.length; i++){
            if(newColor[i].style.backgroundColor == "#fad980"){
                map1 = i
            }
        }
        if (map1 == 0){
            return "Small"
        }
        else if (map1 == 1 )
            return "Medium"
        else if (map1 == 2)
            return "Large"
    }


localStorage.setItem()

var selectedDetails = {
    name: "Standard Couch Pillow",
    quantity: parseInt(document.getElementById("changequantitytext").innerHTML.replace('Quantity: ','')),
    size: getsize(),
    color: getcolor(),
    
}


var priceValue = parseInt(document.getElementById("pricetagtext").innerHTML.replace('Price: ',''))

if(quantity > 1){
    priceValue == priceValue * quantity

}







    
   


    

 

