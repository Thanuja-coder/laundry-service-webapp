window.onload=function(){
    loadCart();
}

document.addEventListener("click",function(e){
    if(e.target.classList.contains("add-btn")){
        let name=e.target.getAttribute("data-name");
        let price=e.target.getAttribute("data-price");
        addItem(name,price);
    }
        if(e.target.classList.contains("remove-btn")){
        let index=e.target.getAttribute("data-index");
        removeItem(index);
    }

    if (e.target.id=="bookBtn"){
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let phone=document.getElementById("phone").value;
        let valid=validateForm(name,email,phone);
        if(valid){
            sendEmail(name,email,phone);
            document.getElementById("successMsg").innerText="Booking Successful!";
        }

    }
});
document.getElementById("bookServiceBtn").addEventListener("click",function(){
    document.getElementById("services").scrollIntoView();
});


