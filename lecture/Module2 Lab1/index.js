// Student Name: Seokgyun Kang
// Student ID: 1226364375
// Date: Sep 3, 2023

const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate');

//////////////////////////////////////////////////////////////////////////////////////
// Read Data from File
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`, 
    'utf-8'
);

//////////////////////////////////////////////////////////////////////////////////////
// Template
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`, 
    `utf-8`
);

// function replaceTemplate(htmlStr, course){}
// const replaceTemplate = (htmlStr, course)=>{
//     let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
//     output = output.replace(/{%IMAGE%}/g, course.image);
//     output = output.replace(/{%FROM%}/g, course.from);
//     output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
//     output = output.replace(/{%CREDITS%}/g, course.credits);
//     output = output.replace(/{%DESCRIPTION%}/g, course.description);
//     output = output.replace(/{%ID%}/g, course.id);
//     return output;
// }

const dataObj = JSON.parse(tempCourse);  // String to JavaScript Object JSON

//////////////////////////////////////////////////////////////////////////////////////
// Create Server
// const server = httpServer.createServer(function (req, res) { // call back function
const server = httpServer.createServer( (req, res) => { // call back function

    // const urlParameter = url.parse(req.url, true);
    // console.log(urlParameter.query);
    // console.log(urlParameter.pathname);
    const {query, pathname} = url.parse(req.url, true);  // object destructor 

    if(query.id){  // if there is query parameter named id read as string

        if(pathname === '/' || pathname.toLowerCase() === '/courses') {
            res.writeHead(200, { // Every thing ran successfully
                'Content-type': 'text/html'
            });
            const course = dataObj[Number(query.id)];  // convert sting to numeric value
            const strCourserName = JSON.stringify(course);
            const courseHTML = replaceTemplate(templateHTMLCourse, course); // function that will replace the course values in the HTML
            // res.end(` We received our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
            // ${JSON.stringify(course)}
            // `);  //convert object back to string
            res.end(courseHTML);    
        }

        else{
            res.writeHead(404, { // Server did not find what you were looking for 
                'Content-type': 'text/html'
                });
            res.end(`resource not found`)
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////
// Start Listening to request
server.listen(8000, 'localhost', () => {
    console.log('Listening to request on port 8000')
});

