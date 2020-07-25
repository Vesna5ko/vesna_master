const hello = (req, res) => {
    res
        .status(200)
        .json({"message": "Hello World!!!"})
};
const helloVesna = (req, res) => {
    res
        .status(200)
        .json({"message": "Hello Vesna!!!"})
};

module.exports = {
    hello,
    helloVesna
};