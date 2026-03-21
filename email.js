(function(){
    emailjs.init("wiXt9QvlMHZ0dg-pJ");
})();


function sendEmail(name,email,phone){
    emailjs.send("service_b8xz1vh","template_y0lb5n9", {
        name: name,
        email: email,
        phone: phone
    })
    .then(function(response){
        console.log("Email sent successfully", response.status, response.text);
        alert("Email sent successfully");

    })
    .catch(function(error){
        console.error("Failed to send email", error);
        alert("Failed to send email");
    });
}