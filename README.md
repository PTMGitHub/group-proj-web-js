# Group project - Web App Practice
Started: 21 Jan 2021

## Task requirements
* [x]Using JS create a server that serves a simple HTML “Hello World”
* [x]Add a separate style sheet and ensure the server serves that too
* [x]Create a JS script that prints to the console, reference in the HTML and ensure is runs on page load
* [x]Add some more content and style by referencing by HTML Class
* [x]Add some more content and style by referencing by HTML ID
* [x]Create a button that when clicked calls a function in your script
* [x]Create a button to set the cookie
* [x]Create a button to read and display the cookie
* [x]Create a button that saves something to local storage
* [x]Create someway of displaying that
* [x]Refresh the page, is it still there? ***Just Steve it is***
* [x]What’s the difference between cookies and local storage?
    * Local Storage persists, is saved on client, bigger storage (possibly up 5MB per domain)
    * Cookies restricted to 4096bytes, test only and users can easily delete them.
* [x]When would you use them in the real word?
    * Localstorge - best option available right now. It's great for storing things like names and emails from contact forms. Allowing you to pre-fill those fields if the user views the form again
    * Cookies - dont there are better options.
* [x]Read and display the location of your device
* [x]What kind of apps would this be useful for? Is there any reason you wouldn’t know the device’s location?
    * Apps that need your location
    * user can deny permission
* [ ]Create a web worker that logs the messages it receives and responds, have the main thread log the response.
* [ ]What could you use a web worker for? Find a real world example.

## Requirments
* sudo apt install nodejs
* sudo apt install npm
* sudo npm install -g nodemon
* sudo npm install express --save

## To Run
1. Start the server
```shell
nodemon app.js
```
2. Should then find it at  ```http://localhost:3001/```

## Helpful things

### Port already in use
If you need to re-run the server and the port is in use, kill the process:
1. find the PID (process id)
```
netstat -tunlp
```
2. then kill the process
```
kill -9 PID
```