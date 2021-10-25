let quantity = 1;

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
function increaseQuantity(){
    if (quantity >= 1 &&  quantity < 10){
    quantity++;
    }
    updateQuantity();

}
    

function decreaseQuantity(){
    if (quantity>1)
    {
    quantity--;
    }
    updateQuantity();
}

function cartNotification()
{
    document.getElementById("Notification").style.opacity = "100";

    if(quantity>1)
    {
        document.getElementById('Notification').innerHTML = `${quantity}`;  
    }

}

