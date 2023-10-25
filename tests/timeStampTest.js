const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const expect = chai.expect;

chai.use(chaiHttp);

// Test suite for timestamp functionality
describe("Timestamp Tests", function () {
  let server;

  // Setting up the server before running the tests
  before((done) => {
    let port = process.env.PORT || 5000;
    server = app.listen(port, () => {
      console.log("Test server is running on port 3000");
      done();
    });
  });

  // Testing for handling 'Invalid Date' error response
  it("should return status 200 and an 'Invalid Date' error", async function () {
    try {
      const res = await chai.request(app).get("/api/1451001600000a");
      expect(res).to.have.status(400);
      expect(res.body).to.deep.equal({error: "Invalid Date"});
    } catch (err) {
      throw err;
    }
  });

  // Testing the successful response with a specific UNIX timestamp
  it("The test should return a status of 200 and the correct date from the UNIX timestamp, and the UNIX timestamp should return...", async function () {
    try {
      const res = await chai.request(app).get("/api/1451001600000");
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal({
        unix: 1451001600000,
        utc: "Fri, 25 Dec 2015 00:00:00 GMT",
      });
    } catch (err) {
      throw err;
    }
  });

  // Testing the successful response with a specific date format
  it("The test should return a status of 200 and the correct Unix from the date, and the date should return in UTC format...", async function () {
    try {
      const res = await chai.request(app).get("/api/2015-12-25");
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal({
        unix: 1451001600000,
        utc: "Fri, 25 Dec 2015 00:00:00 GMT",
      });
    } catch (err) {
      throw err;
    }
  });

  // Testing the successful response with the current UTC and UNIX timestamps
  it("The test should return a status of 200 and current UTC & Unix from that date", async function () {
    try {
      const res = await chai.request(app).get("/api/");
      // Define a tolerance value for the comparison (e.g., 150 milliseconds)
      const tolerance = 150;

      // Obtain the current UTC and Unix timestamps
      const currentUnix = new Date().valueOf();
      const currentUTC = new Date().toUTCString();

      // Compare the response body with the current timestamps within the defined tolerance
      expect(res.body.unix).to.be.closeTo(currentUnix, tolerance);
      expect(res.body.utc).to.equal(currentUTC);
    } catch (err) {
      throw err;
    }
  });

  // Closing the server after running the tests
  after((done) => {
    if (server && server.listening) {
      server.close(() => {
        console.log("Test server shut down");
        done();
      });
    } else {
      done();
    }
  });
});
