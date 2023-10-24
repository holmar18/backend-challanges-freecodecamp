## Endpoint

- **Description**: Retrieves a Unix timestamp and UTC format for a given date. If the date parameter is empty, it returns the current time.
- **URL**: `/api/:date`
- **Method**: `GET`
- **URL Params**:
  - Required: `date=[string]`
- **Success Response**:

  - **Code**: 200
  - **Content**:

    ```json
    {"unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"}
    ```

- **Error Response**:

  - **Code**: 400 Bad Request
  - **Content**:

    ```json
    {"error": "Invalid Date"}
    ```

- **Empty Date Response**:
  - If the date parameter is empty, the endpoint returns the current time in a JSON object with both `unix` and `utc` keys.
    <br><br><br>

### Example Requests and Responses

1. Request: `/api/1451001600000`
   Response:

   ```json
   {
     "unix": 1451001600000,
     "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
   }
   ```

2. Request: `/api/11-11-2014`
   Response:

   ```json
   {
     "unix": 1415692800000,
     "utc": "Tue, 11 Nov 2014 00:00:00 GMT"
   }
   ```

3. Request: `/api/16334233a`
   Response:

   ```json
   {
     "error": "Invalid Date"
   }
   ```

4. Request: `/api/`
   Response:
   ```json
   {
     "unix": "<current_unix_timestamp>",
     "utc": "<current_utc_timestamp>"
   }
   ```
