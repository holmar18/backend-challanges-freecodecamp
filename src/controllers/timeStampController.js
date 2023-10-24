const timeStampConvert = require("../utils/timeStamp");

/**
 * Controller function to handle timestamp conversion based on the request parameter.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getTimeStamp = async (req, res) => {
  try {
    if (!req.params.date) {
      // Return the current time if the date parameter is empty
      const dateData = timeStampConvert("");
      return res.status(200).json(dateData);
    }

    // Handle non-empty date parameter
    const dateUnixParam = req.params.date;
    const dateData = timeStampConvert(dateUnixParam);

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
