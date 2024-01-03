// Import required modules
const express = require('express'); //Creating an Express app
const morgan = require('morgan'); //logging http requests
const bodyParser = require('body-parser'); //passing incoming   JSON data

// Create an Express app
const app = express();
const port = 3000; // Change this to your desired port

// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev')); // Logging middleware
app.use(bodyParser.json()); // JSON parsing middleware

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/',(req,res) => {
    res.render('index',{
        time: new Date().toString()
    });
});

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World from ExpressJS!'
    })
});
app.get('/about',(req,res) => {
    res.render('about');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});