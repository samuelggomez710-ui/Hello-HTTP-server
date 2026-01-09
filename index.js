// Create a variable to load HTTP module to
const http = require('http');
// Make server listen on port 8080 if not given a port to use
const PORT = process.env.PORT || 8080;

// Make a function to create an HTTP server
const server = http.createServer((req, res) => {
    // Log each request to the console with timestamp and method
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    // Sends back statuscode 200 which means ok
    res.statusCode = 200;
    // Set the content type to plain text
    res.setHeader('Content-Type', 'text/plain');\
    // Send back the response body "Hello World" and end the response
    res.end('Hello World');
});

// Tell the server to start listening on the specified port from before
server.listen(PORT, () => {
    // Log message to let us know which port the server is listening on
    console.log(`Server listening on port ${PORT}`);
});