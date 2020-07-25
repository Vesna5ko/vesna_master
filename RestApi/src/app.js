const express = require("express");
const app = express();

const helloworldRouter = require('./routers/helloWorldRouter');
const questionsRouter = require('./routers/questionsRouter');
const answersRouter = require('./routers/answersRouter');

// We must add parser before setting routes
app.use(express.json());

// Set rootes as late as possible so that all setting before do have effect
app.use('/api', helloworldRouter);
app.use('/api', questionsRouter);
app.use('/api', answersRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});