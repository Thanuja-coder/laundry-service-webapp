function validateForm(name,email,phone){
    if(name==="" || email==="" || phone==="")
    {
        alert("Please fill all details");
        return false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Enter valid email");
        return false;
    }


    if(phone.length !== 10){
        alert("Enter valid phone number");
        return false;
    }

    return true;

}
