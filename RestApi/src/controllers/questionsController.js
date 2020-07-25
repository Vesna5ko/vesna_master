const question = (req, res) => {
    res
    .status(200)
    .json({"question":"What is your name?"})
}

module.exports = {
    question,
    
}