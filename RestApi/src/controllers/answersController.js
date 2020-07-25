const answer = (req, res) => {
    res
    .status(200)
    .json({"question":"My name is Vesna"})
}
module.exports = {
    answer
}