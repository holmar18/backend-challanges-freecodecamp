const timeStampConvert = require("../utils/timeStamp");

/**
 * Controller function to handle timestamp conversion based on the request parameter.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getTimeStamp = async (req, res) => {
  try {
    // Handle non-empty date parameter
    const dateUnixParam = req.params.date;
    // if params is empty return current date, passing empty string to
    // timeStampCovert will result in returning current date/unix
    const dateData = timeStampConvert(!req.params.date ? "" : dateUnixParam);

    // Check for error message in the response data
    if (dateData.hasOwnProperty("error")) {
      return res.status(400).json(dateData); // Return a 400 Bad Request status for invalid data
    }

    // Return the converted date data with a 200 OK status
    return res.status(200).json(dateData);
  } catch (error) {
    // Handle any unexpected errors with a 500 Internal Server Error status
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  getTimeStamp,
};
