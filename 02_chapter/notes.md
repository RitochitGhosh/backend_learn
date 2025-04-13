### Notes

---

- package.json:  This file contains all the specifications for the project.
- Express: npm install express --save
- nodemon: npm install --save-dev nodemon

### Steps:
1. Set up a server with express, add nodemon as dev dependency to implement changes on the run time of the server.
2. Configure our app for the HTTP Verbs & Routes.
3. Status codes: A status code is a 3-digit number sent by a server in response to a client's request. It tells the client what happened with the request — whether it was successful, failed, redirected, etc. These are part of the HTTP protocol. 

| Status Code Range | Type                        | Meaning                                                    |
|-------------------|-----------------------------|------------------------------------------------------------|
| 100–199           | Informational               | Request received, continuing process                       |
| 200–299           | Success                     | The request was successfully received, understood, accepted|
| 300–399           | Redirection                 | Further action needs to be taken to complete the request   |
| 400–499           | Client Error                | The request contains bad syntax or cannot be fulfilled     |
| 500–599           | Server Error                | The server failed to fulfill a valid request               |

4. Two types of endpoints - Website endpoints, API endpoints
5. Install the extension `REST Client`, create `test.rest` file to test your api endpoints