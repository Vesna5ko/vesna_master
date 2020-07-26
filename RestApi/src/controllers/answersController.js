const answer = (req, res) => {
    res
    .status(200)
    .json({"question":"My name is Vesna"})
}
const answerjob = (req, res) => {
    res
    .status(200)
    .json({"question":"I am a teacher."})
}
module.exports = {
    answer,
    answerjob
}