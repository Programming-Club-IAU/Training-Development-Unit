## Week 8 – 📱 Introduction to APIs

This week we will learn about APIs and how to use them in Flutter.
We will cover:

- What is an API?
- Types of API Requests
- What is JSON and why is it used?
- Fetching data usin the http package
- Displaying data in flutter (basic example)


API (Application Programming Interface) is a way for your app to request data from another system.
<br>
You send a request → the server processes it → the server sends back data for your app to use.
<br>
This is the basic idea behind almost every app you use daily! Weather apps get today’s temperature, shopping apps fetch product lists, and social media apps load posts and comments, and so on.


The most common 4 types of API Requests are:
1. GET - Fetch data: Used when app wants to *read* Information.
  - Example: Get a list of products.
2. POST - Add new data: Used when sending *new* information to the server.
  - Example: Create a new user account.
3. PUT - Update existing data: Used when *editing* information already stored.
  - Example: Update a user profile.
4. DELETE - Remove data: Used when deleting something from the server
  - Example: Delete a post

When APIs send data back to your app, it will usually be sent in a format called **JSON (JavaScript Object Notation)**.
JSON looks like a clean, structured version of a "map" and is easy for Flutter/Dart to work with.



To communicate with an API, Flutter uses the "http package" that allows your app to:
- Send a request to a server
- Receive a response
- Check if the request was successful
- Read and decode the JSON data


To fetch data using this package you need to follow these steps: 
- Add the http package
- Make a GET request
- Decode JSON into Dart objects
- Show the data on the UI
- Handle loading & errors simply


<br>


## 📚 Resources:

*Friendly reminders 😁:*
- **If the tutorial has intro/outro music, please mute it**
- If the tutorial shows a UI widget you don’t know, just quickly search it (all of them are easy and fun, don’t panic!)

1. What is API
  - [MuleSoft Videos - What is an API?](https://youtu.be/s7wmiS2mSXY)
  - [Happy Tech - Important Definitions and API components](https://youtu.be/fMfklcNECqA)
2. State Management (Provider)
  - What is JSON
    - [Tarmez Academy](https://youtu.be/4dz4qDMwmCM)
3. Using API in Flutter:

STILL TO DO !!!!!!!!!!!!!!!!!!!!!!!!

<br>

## 🧠 Assignment:

Build a project with a simple page that fetches data from any public API.
You may follow one of the tutorials above, or the additional resources below, or choose any public API you like!
Remember to keep it simple as the goal for now is to understand APIs, not to build a complete app.


<br>


## 💡 Additional Resources (Optional)

If you want to explore more later: Check out the Dio package, which provides more advanced tools for handling HTTP requests.

- [Recipe List App](https://youtu.be/FlGTSb7_9jk?si=zcuaJ2zEVZZoogC3)
- [Weather App](https://youtu.be/yLtpMqvMgdY?si=pRDTGz95xnY7G3-4)










