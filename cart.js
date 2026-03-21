let cart=[];

function addItem(name,price)
{
    cart.push({
        name: name,
        price: Number(price)
    });
   console.log("Item Added: ", name, price); 
   displayCart();
   saveCart();
}

function displayCart(){
    let list=document.getElementById("cartItems");
    let totalDisplay=document.getElementById("total");
    list.innerHTML="";
    let total=0;
    cart.forEach(function(item,index){
        total+=item.price;
        let li=document.createElement("li");
        li.innerHTML=item.name + "- Rs."+ item.price+ "<button class='remove-btn' data-index='" + index + "'>Remove </button>";
        list.appendChild(li);
    });
    totalDisplay.innerText=total;
}

function removeItem(index){
    cart.splice(index,1);
    console.log("Item Removed: ", index);
    displayCart();
    saveCart();
}

function saveCart(){
    localStorage.setItem("cartData", JSON.stringify(cart));
}

function loadCart(){
    let data=localStorage.getItem("cartData");
    if(data){
        cart=JSON.parse(data);
        displayCart();
    }
    
}

