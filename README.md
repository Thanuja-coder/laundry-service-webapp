# Laundry Service Web Application

This project is a web application for a laundry service that users to explore services, add items to a cart and remove, and book laundary services. The application provides a simple and userfriendly interface for customers to place orders.

## Features

- Responsive Navigation Bar
- Hero Section with call-to-action
- Service Overview Section
- Add laundry services to cart
- Dynamic total price calculation
- Booking form for customer details
- Email confirmation using EmailJS
- Quality description section
- Newsletter subscription section
- Footer with useful links

## Technologies Used

- HTML
- CSS
- JavaScript
- EmailJS (for sending booking confirmation emails)

## How to Run the Project

1. Download or clone the repository
2. Open the project folder
3. Open `index.html` in a web browser

##  EmailJS Setup
Created EmailJS account
Connected Gmail service
Created template with variables:
{{name}}
{{email}}
{{phone}}
Added public key,service ID, template_ID in email.js
Used emailjs.send() to send booking details

I learnt that Emailjs requires public key for frontend usage, but in real-world applications, a backend service should be used to secure API. But here as I hvnt learnt about API's I have to learn more about API and then I'll implement.

## Author
Thanuja
