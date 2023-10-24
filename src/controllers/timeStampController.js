const timeStampConvert = require("../utils/timeStamp")

const getTimeStamp = async (req, res) => {
    try {
        let dateUnixParam = req.params.date;
        let dateData = timeStampConvert(dateUnixParam);
        res.status(200).json(dateData)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}




module.exports = {
    getTimeStamp
}