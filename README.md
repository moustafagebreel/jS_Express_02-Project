#First

-make sure you have Node.js

-and npm (Node Package Manager) installed on your system. Then, create a new directory for your project and navigate to it in your 

-terminal. Initialize a new Node.js

-project by running the following command:



1-npm init -y

2-install the required dependencies by executing the following commands:

-npm install express body-parser jsonwebtoken bcryptjs
to run the the code using (npm start) 


You can then test the login and registration endpoints using tools like cURL or Postman. 


#example of how you can make a POST request using Postman to the /login endpoint with the required payload:

#URL: http://localhost:5000/login
Method: POST
Headers:Content-Type: application/json
Body (raw JSON):

{
    "email": "example@example.com",
    "password": "Password123!"
}


#After sending the request, 
#you should receive a response with a JSON object 
#containing the user's email, password,and token.


Similarly, you can make a POST request to the /registration endpoint with the following payload:

URL: http://localhost:5000/registration

Method: POST

Headers:Content-Type: application/json

Body (raw JSON):
{
    "email": "example@example.com",
    "password": "Password123!",
    "passwordRepeat": "Password123!"
}

-This will create a new user if the provided email is not already registered,

-and you will receive a JSON response with the success field set to true.

-Make sure your server is running on localhost at port 5000 for these requests to work. 
-Adjust the URL accordingly if you're using a different host or port.

-Remember to replace example@example.com, Password123!,
-and "your-secret-key" with appropriate values based on your test scenario.
