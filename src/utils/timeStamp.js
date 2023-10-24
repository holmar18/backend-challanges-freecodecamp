/**
 * Converts a Unix timestamp or date string to the desired format.
 * @param {string} dateOrUnix - The date string or Unix timestamp to convert.
 * @returns {Object} - An object containing the converted Unix timestamp and UTC date string or an error message.
 */
const timeStampConverter = (dateOrUnix) => {
  // Check if the input is not a valid Unix timestamp or date string
  if (isNaN(dateOrUnix) && new Date(dateOrUnix) == "Invalid Date") {
    return {error: "Invalid Date"};
  }

  // Check if the input is a valid Unix timestamp
  let isUnix = /^\d+$/.test(dateOrUnix);
  if (isUnix) {
    let unixInt = parseInt(dateOrUnix);
    return {unix: unixInt, utc: new Date(unixInt).toUTCString()};
  } else if (dateOrUnix == "") {
    // Handle the case when the input is an empty string
    return {unix: new Date().valueOf(), utc: new Date().toUTCString()};
  }

  // Convert the valid date string to Unix timestamp and UTC date string
  return {
    unix: new Date(dateOrUnix).valueOf(),
    utc: new Date(dateOrUnix).toUTCString(),
  };
};

module.exports = timeStampConverter;
