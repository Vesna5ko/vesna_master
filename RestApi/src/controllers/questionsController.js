const question = (req, res) => {
    res
    .status(200)
    .json({"question":"What is your name?"})
}
const questionjob = (req, res) => {
    res
    .status(200)
    .json({"question1": "What is your job?"})
}

module.exports = {
    question,
    questionjob
    
}