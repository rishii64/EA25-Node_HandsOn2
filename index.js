const express = require("express")
const app = express()

app.get("/express",(req,res)=>{
    res.write("<h1>Express JS : </h1>")
    res.write("<p><b>Express.js</b> is a back-end web application framework for building RESTful APIs with Node.js. It is designed to build single-page, multi-page, and hybrid web applications. It has been called the de facto standard server framework for Node.js.</p>")
    res.write("<p>Express.js is a popular choice for Node.js development because it is easy to use, flexible, and scalable. It provides a number of features that make it easy to build web applications, including:</p>")
    res.write("<ul> <li>Routing: Express.js makes it easy to define routes for your application. Routes are used to map incoming requests to specific functions in your code.</li>   <li>Middleware: Middleware is a function that can be used to modify requests and responses before they are processed by your application. Middleware can be used for a variety of tasks, such as authentication, logging, and error handling.</li>   <li>Templating: Express.js supports a number of templating engines, which can be used to generate dynamic HTML pages.</li>    <li>Static file serving: Express.js can be used to serve static files, such as images, CSS, and JavaScript files.</li> </ul>")
    res.write("<p>Express.js is a powerful and flexible framework that can be used to build a wide variety of web applications. It is a popular choice for Node.js development because it is easy to use, flexible, and scalable.</p>")
    res.end()
})
app.listen(3000,()=>{
    try{
        console.log("server started...");
    }
    catch{
      console.log(err, "404 error !!");  
    }
})