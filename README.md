# myway problem statement.
MyWays Live Javascript Hiring Challenge Mar’23

Round 1 (Compulsory for all)

Instructions:
You will need to record your screen while solving the challenge.  Extension link
Make sure your camera is on during the challenge. Your submission will not be considered if the camera is not on.
You must submit your solution as link of a public github repository.
Maximum time for this challenge is 30mins.
Any type of cheating will result in disqualification.

Problem Statement:
Create a form with 3 required fields for name, email, and phone (you can use any front-end technology for creating the form react, angular, normal HTML/CSS all are acceptable) on form submit make a GET API call to Get User API check if the user exists or not if Exist Show/Alert User Found else make another POST API call to create that user and then Show/Alert User Created Successfully.

Submission:
Make an entry by summiting your form with the email (registered with MyWays), name, and phone.
Upload your code to a public github repo and fill out the form: https://forms.gle/RugFz9mJi5zx7Gek7

Get User API:

GET https://test-api-v3.myways.ai/user?email=<EMAIL>

- email is required

Post User API:

POST https://test-api-v3.myways.ai/user

- email, name, and phone are required

Sample Request Body:
{
    "name": "John",
    "email": "john@john.com",
    "phone": "9090909090"
}
