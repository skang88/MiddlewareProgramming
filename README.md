# MiddlewareProgramming

This repository is the result of a middleware programming course. The final goal is to learn how to develop Node JS applications, especially how data is exchanged between servers and databases, and between servers and clients, and how more efficient designs are possible.


# Module2 A1 | [(Link)](https://github.com/skang88/MiddlewareProgramming/tree/main/lecture/Module1%20A1)

In this module, I practiced an example of receiving two numbers from the ejs form and outputting the result of adding, subtracting, multiplying, or dividing the two numbers. The code to configure the approximate server is as follows.

Call the required library using the require() function.

Configures the body-parser to process incoming requests from web browsers.

Set the form displayed in the web browser to be displayed as ejs.

The GET function allows the web browser to input two numbers.

In the POST function, the result of the four arithmetic operations using two numbers is stored in a variable and the result is sent to result.ejs.

In result.ejs, there is a code that displays variables sent from POST, so we can view the result as result.ejs in a web browser.


## Deploying in the web server

I deployed this server in the Oracle Cloud Infrastructure

To do this, I went through trial and error. After creating an instance, setting up a virtual network, and setting up a firewall, I was able to access the server. However, since I had to run command "node app.js" on the instance, there was an issue where the web server was shut down when I closed the terminal. I had to register this app as a service in systemd, I had to know how to initialize it because I didn't know the root password of the OCI instance, and I even had to know how to create and configure a service file in systemd. After several trials and errors, I was eventually able to successfully deploy the app.

[App Link](http://129.146.239.111:4000/)


Check this service status
```
systemctl status mywww
```
Stop this service
```
systemctl stop mywww
```
Start this service
```
systemctl start mywww
```

Create and Change mywww.service
```
sudo nano /etc/systemd/system/mywww.service
```

Firewall port add
```
sudo firewall-cmd --add-port=4000/tcp
```

Apache Web Server Setting, 
To avoid confliction between two server, the basic apache webserver port setting is needed. 
In this configure file, I can change the port. 
```
sudo nano /etc/httpd/conf/httpd.conf
```


# Module2 A2 - JavaScript language  | [(Link)](https://github.com/skang88/MiddlewareProgramming/tree/main/lecture/Module2%20A1)

In this modue, I defined an Array and practiced how to access an Array, and among the many ways to define a function, I practiced the arrow fat function.

The following method of defining a function is familiar as it is used in Python and many other languages.

```
function f_name (parameters) {
    actions...
 }
```

In JavaScript, thers's another way to define a function, which is called by Arrow function. 

```
const f_name = (parameters) => { }
```
or, if there's only one paramter and one action,
```
const f_name = parameter => action
```

for example, if I define greeTheStudents function in the following way, the result is going to be "Hello there Name". In this case, even the return statement is not needed. 

```
const greetTheStudents = studentName => `Hello there ${studentName}`;
```
