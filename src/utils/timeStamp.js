

const timeStampConverter =(dateOrUnix) => {
    if(isNaN(dateOrUnix) && new Date(dateOrUnix) == "Invalid Date") {
        return {error: "Invalid Date"}
    }
    let isUnix = /^\d+$/.test(dateOrUnix);
    if(isUnix) {
        let unixInt = parseInt(dateOrUnix)
        return {unix: unixInt, utc: new Date(unixInt).toUTCString()}
    }
    return {unix: new Date(dateOrUnix).valueOf(), utc: new Date(dateOrUnix).toUTCString()}
}


module.exports = timeStampConverter