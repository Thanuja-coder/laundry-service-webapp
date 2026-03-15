let total = 0;

function scrollToBooking(){
document.getElementById("services").scrollIntoView();
}


function addItem(name,price){

let cart = document.getElementById("cartItems");

let li = document.createElement("li");

li.innerText = name + " - ₹" + price;

cart.appendChild(li);

total += price;

document.getElementById("total").innerText = total;

}



function bookNow(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;


if(name=="" || email=="" || phone=="")
{
alert("Please fill all details");
return;
}

document.getElementById("successMsg").innerText =
"Thank you For Booking the Service We will get back to you soon!";

sendEmail(name,email,phone);

}

(function(){
emailjs.init("wiXt9QvlMHZ0dg-pJ");
})();

function sendEmail(name,email,phone){

let params = {
name:name,
email:email,
phone:phone,
total:total
};

emailjs.send("service_b8xz1vh","template_y0lb5n9",params)
.then(function(){
console.log("Email Sent");
});

}