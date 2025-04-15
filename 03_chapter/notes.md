### 🌐 REST API

- **REST** stands for **Representational State Transfer** — it's not a technology, but an **architectural style** or set of **best practices** for designing web services.
- A **REST API** allows different systems to communicate over the web using standard **HTTP methods**.
- It follows the idea of treating **everything as a resource**, which can be accessed or modified via specific URLs.

---

### 🛠️ REST API & HTTP Methods

REST APIs commonly use the following **HTTP methods** to perform operations on resources:

| HTTP Method | Operation | Description                          |
|-------------|-----------|--------------------------------------|
| `GET`       | Read      | Retrieve data from the server        |
| `POST`      | Create    | Send data to the server to create it |
| `PUT`       | Update    | Replace existing data on the server  |
| `PATCH`     | Update    | Partially update existing data       |
| `DELETE`    | Delete    | Remove data from the server          |

---

### 📦 Example:

Let’s say you're working with a `users` resource.

| Action            | HTTP Method | Endpoint         |
|-------------------|-------------|------------------|
| Get all users     | `GET`       | `/users`         |
| Get a single user | `GET`       | `/users/:id`     |
| Create a new user | `POST`      | `/users`         |
| Update a user     | `PUT`       | `/users/:id`     |
| Delete a user     | `DELETE`    | `/users/:id`     |

---

### 🧠 Key REST Concepts

- **Stateless**: Each request is independent; the server doesn’t store any context.
- **Resource-based**: Everything (like `users`, `posts`, `orders`) is treated as a resource.
- **Uniform Interface**: Consistent use of URIs and HTTP methods makes APIs predictable and easy to understand.

> 💡 REST makes APIs easy to use and integrate — it's the foundation of modern web services.


### 📦 HTTP Headers

- **Headers** are key-value pairs sent in HTTP requests and responses.
- They provide **extra information** such as content type, authentication, and caching.

#### 🔑 Common HTTP Headers:
- `Content-Type`: Media type of the resource (e.g., `application/json`).
- `Authorization`: Credentials for authentication.
- `Accept`: Desired response format (e.g., `application/json`, `text/html`).
- `User-Agent`: Identifies the client making the request.

---

### 🌐 CORS (Cross-Origin Resource Sharing)

- A security mechanism that **controls access** to resources from different origins.
- Important for **frontend-backend communication** when hosted on different domains.

#### 🛡️ Common CORS Headers:
- `Access-Control-Allow-Origin`: Allowed origin(s).
- `Access-Control-Allow-Methods`: Allowed HTTP methods (`GET`, `POST`, etc).
- `Access-Control-Allow-Headers`: Allowed custom headers (e.g., `Content-Type`, `Authorization`).

> CORS helps prevent **Cross-Site Request Forgery (CSRF)** and other security risks.

---

### 🔐 Authentication vs Authorization

- **Authentication**: Verifies *who* the user is (identity).
- **Authorization**: Determines *what* the user can do (access rights).

#### 👤 Common Authentication Methods:
- **Basic Auth**: Username and password sent in headers (base64 encoded).
- **API Keys**: Simple tokens used to identify and authenticate users.
- **JWT (JSON Web Tokens)**: Self-contained token with user info (header, payload, signature).
- **OAuth 2.0**: Industry-standard protocol for secure authorization.

#### 🛂 OAuth Terms:
- **Access Token**: Token used to access protected resources.
- **Scopes**: Define the level of access (e.g., `read:user`, `write:posts`).

> 🧠 **Tip**: Always use HTTPS when dealing with credentials or tokens to ensure secure transmission.

# Needs to be worked .... (Not complete)
- Middleware
- DataBase
- MongoDB
1. No-SQL Document Based Database
2. String support for aggregation Pipes.
3. Works on BSON format.
4. Best for Node Applications.
### Architecture of MongoDB
- Broader level : Collection (eg, "users" collections) similar to tables in SQL databases
- Next Level: Document (Entries inside collection)

