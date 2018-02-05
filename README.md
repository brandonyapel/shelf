# Full Stack with Auth Group Project

Team Members
-----------
Brandon Yapel
Arick Schaibly
Ryan DeCook

Planning Docs
-----------
![Planning Doc](plan.jpg)


Setup Directions
-----------
* Run `npm install`,
* Start mongo if not running already by using `mongod`
* Run `npm start` in an open tab of terminal

![our shelf](tauShelf.png)

Technologies
------------
* Mongo
* Express
* Angular
* Node
* Passport
* git
* github
* mlab
* heroku
* filestack

Project Description
-------------------
Our client, **Prime Digital Academy: Room 3**, has asked for an app to simulate the behavior of their shelf. That is, a list of items placed on the classroom shelf.

**Any visitor** to the page can view the shelf, but only logged in users should be able to place objects on the shelf. Authentication should happen on the client and the server.

This will require some research, design, an implementation. Update this README.md to include the names of the group members and your team name/number. As well as any planning/docs. These can be in digital format or even pics of whiteboard/notebook sketches.

Screen Shots
------------
![login-view](./demo-images/login-view.png)
![logged-in-view](./demo-images/logged-in-view.png)


Features
------------
[x] Items placed on the shelf should have the following data:

* description
* placer (user)
* image url (optional)

[x] only logged in users can remove objects from the shelf

[x] styling

[x] logged in users can only remove their objects from the shelf

[x] show list of users only to logged in users

[x] implement [file stack](https://www.npmjs.com/package/filestack-js) for image upload

[ ] filter output by user (click on a user to only show items by that user)

[ ] users can re-order shelf
