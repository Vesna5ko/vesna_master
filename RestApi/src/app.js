const express = require("express");
const app = express();
const cors = require('cors')

require('./models/db')

const helloWorldRouter = require('./routers/helloWorldRouter');
const booksRouter = require('./routers/booksRouter');



// We must add parser before setting routes
app.use(express.json());
app.use(cors());

// Set roots as late as possible so that all setting before do have effect
app.use('/api', helloWorldRouter);
app.use('/api', booksRouter);



const port = process.env.PORT || 9000;
app.listen(9000, () => {
    console.log("Server running on port 9000");
});