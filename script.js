let cart = [];
let total = 0;
const cartList = document.getElementById("cartItems");
const totalDisplay = document.getElementById("total");

document.getElementById("bookServiceBtn").addEventListener("click", function () {
  document.getElementById("services").scrollIntoView();
});

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", function () {

    let name = this.dataset.name;
    let price = parseInt(this.dataset.price);

    cart.push({ name, price });

    updateCart();
  });
});

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {

  cartList.innerHTML = "";
  total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    let li = document.createElement("li");

    li.innerHTML = ` ${item.name} - ₹${item.price}
      <button class="remove-btn" data-index="${index}">Remove</button> `;

    cartList.appendChild(li);
  });

  totalDisplay.innerText = total;
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let index = Number(this.dataset.index);
      removeItem(index);
    });
  });
}

document.getElementById("bookBtn").addEventListener("click", function () {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    document.getElementById("successMsg").innerText = "Please fill all details";
    return;
  }

  document.getElementById("successMsg").innerText =
    "Thank you for booking! We will contact you soon.";

});

document.getElementById("subscribeBtn").addEventListener("click", function () {

  let name = document.querySelector(".newsletter input[type='text']").value;
  let email = document.querySelector(".newsletter input[type='email']").value;

  if (name === "" || email === "") {
    alert("Enter details");
    return;
  }

  document.getElementById("subMsg").innerText =
    "Subscribed successfully!";
});
