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
