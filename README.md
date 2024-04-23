# React-Portfolio
react front end, js


![](https://img.shields.io/badge/Created%20by-Khoi%20Phan%20-yellow?style=for-the-badge)  
![](https://img.shields.io/badge/Vite%20React-JS-blue?style=flat-square&logo=npm)  ![](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
 ## Table of Contents:  
[1.Description](#Description)  
<br />
[2.Acceptance Criteria](#Acceptance-Criteria)
<br />
[3.Walkthrough Videos](#Walkthrough-Videos)
<br />
[4.Technology](#Technology)
<br />
[5.Screenshots](#screenshots)
<br />
[6.Tests](#Tests)  
<br />
[7.License](#License)  
<br/>
[8.Submission](#Submission)
<br />
[9.Questions](#Questions)  
<br />
## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Description:
This is a set of API for a social network that uses a MongoDB database where users can share their thoughts, react to friends’ thoughts, and create a friend list.
Start the server and perform Get/Post/Put/Delete routes to the API from Insomnia to see it in action. This program has full CRUD functionality (create, read, update and delete)!

## Acceptance Criteria:

- When you enter the command to invoke the application then the server is started and the Mongoose models are synced to the MongoDB database.  
- Testing API GET routes in Insomnia Core for users and thoughts return the data for each of these routes in a formatted JSON
- Testing API POST, PUT, and DELETE routes in Insomnia Core are able to successfully create, update, and delete users and thoughts

- Testing API POST and DELETE routes in Insomnia Core are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Walkthrough Videos

[get-routes.webm](https://github.com/khoiphan-9194/NoSQL-Social-Network-API/assets/149036903/f906a37c-4d15-4b76-9f1a-a9dff05829ae)

[post-put-delete.webm](https://github.com/khoiphan-9194/NoSQL-Social-Network-API/assets/149036903/dd8b407b-dda6-4925-8540-113a369a8dda)



## Screenshots

![Screenshot1](./Assets/create-user.jpg)

![Screenshot2](./Assets/get-allusers.jpg)

![Screenshot3](./Assets/get-single-user.jpg)

![Screenshot4](./Assets/get-allthoughts.jpg)

![Screenshot5](./Assets/wrong-route.jpg)


## Technology:
```md
- Project is created with:

    - Javascript
    - Node.js
    - Express.js
    - MongoDB
    - Mongoose
```

## Installation:

This repo is not to be deployed, if you wanted to, you could by doing the following:  
1. Download the repo files from the link below
2. You must have mongoDB installed
3. Run the following at the command line
```
    - npm install
    - npm run seed
    - npm run dev 
    
```

4. Open Insomnia Core to test API routes

## Tests:  

Testing restful API calls with Insomnia Core  
---
**`/api/users`**
* `GET` all users
* `POST` a new user:
    ```json
    // example data
    {
        "username": "davibeckham",
        "email": "davibeckham@gmail.com"
    }
    ```
---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
    // example data
    {
    "thoughtText": "let play soccer in the summer",
    "username": "davibeckham",
    "userId": "43dzf35820fcb779aa7b118b"
    }
    ```
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"cool cool",
    "username":"heomap"
    }
    ```
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 

## Submission:
 [KhoiPhan-Github repository](https://github.com/khoiphan-9194/NoSQL-Social-Network-API)

## License
[![License: MIT](https://img.shields.io/badge/license-MIT-red)](https://opensource.org/licenses/MIT)

SVG Logo Maker © is licensed under the ISC license.  

For more information regarding the SVG Logo Maker's license, please visit: 
https://opensource.org/licenses/MIT

  
## Questions?
  
### Github:[khoiphan-9194](https://github.com/khoiphan-9194)
  
### Reach Me Via Email: phanminhkhoi91@gmail.com

Thanks for viewing!

<img src="https://raw.githubusercontent.com/its-jefe/image-hosting/main/goal-pole.png" width="20%">

