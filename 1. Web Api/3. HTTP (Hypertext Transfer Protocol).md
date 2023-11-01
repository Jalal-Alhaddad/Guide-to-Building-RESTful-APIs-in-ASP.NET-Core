# HTTP (Hypertext Transfer Protocol)

**HTTP (Hypertext Transfer Protocol)** is the foundation of data communication on the World Wide Web. It is an application layer protocol used to transmit and receive hypertext (text with embedded links) between web browsers and web servers. HTTP defines how messages are formatted and transmitted, as well as how web servers and browsers should respond to various commands and requests. HTTP is stateless, meaning each request-response cycle is independent and doesn't retain information about previous requests.

| **HTTP Method** | **Description**                                                                              |
| --------------- | -------------------------------------------------------------------------------------------- |
| **GET**         | Retrieve data from a specified resource.                                                     |
| **POST**        | Submit data to be processed to a specified resource, often used for creating a new resource. |
| **PUT**         | Update or create a resource at the specified URI.                                            |
| **DELETE**      | Delete the specified resource.                                                               |
| PATCH           | Partially update an existing resource.                                                       |
| HEAD            | Retrieve headers of a resource without the actual data, used for checking modifications.     |
| OPTIONS         | Request information about available communication options for a resource.                    |
| CONNECT         | Establish a network connection to a resource, typically for use with a proxy.                |
| TRACE           | Echo back a received request for debugging and diagnostics.                                  |

## HTTP Request

```php
POST /api/customers HTTP/1.1
Host: api.example.com
Content-Type: application/json
Content-Length: 123

{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "123-456-7890"
}
```

An HTTP request is made by a client (e.g., a web browser) to a server. It consists of several key components:

- **Request Line**: The request line is the first line of an HTTP request and contains three parts:
  - **HTTP Method**: Specifies the action to be performed (e.g., GET, POST, PUT).
  - **Request URI** (Uniform Resource Identifier): Identifies the resource on the server.
  - **HTTP Version**: Specifies the version of the HTTP protocol being used (e.g., HTTP/1.1).
- **Headers**: Headers provide additional information about the request. They are in the form of key-value pairs and convey details such as the content type, user agent, and authentication information. Common request headers include:
  - **User-Agent**: Identifies the client making the request.
  - **Content-Type**: Specifies the format of the data being sent (e.g., application/json).
  - **Authorization**: Contains authentication credentials.
  - **Accept**: Informs the server about the response format desired by the client.
- **Request Body**: The request body is optional and typically used in methods like POST and PUT. It contains the data being sent to the server, often in formats like JSON, XML, or form data.

## HTTP Response

```php
HTTP/1.1 201 Created
Location: /api/customers/123
Content-Type: application/json
Content-Length: 78

{
    "id": 123,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "123-456-7890",
    "created_at": "2023-10-29T14:30:00Z"
}
```

An HTTP response is sent by the server to the client in response to a request. It also consists of several key components:

- **Status Line**: The status line is the first line of an HTTP response and includes three parts:
  - **HTTP Version**: Specifies the version of the HTTP protocol (e.g., HTTP/1.1).
  - **Status Code**: A three-digit numeric code that indicates the outcome of the request (e.g., 200 for a successful response).
  - **Reason Phrase**: A human-readable explanation of the status code (e.g., "OK" for a 200 status code).
- **Headers**: Response headers provide additional information about the response. They serve various purposes, such as caching directives, content type, and server information. Common response headers include:
  - **Content-Type**: Specifies the format of the response data (e.g., text/html, application/json).
  - **Content-Length**: Indicates the length of the response content in bytes.
  - **Cache-Control**: Defines caching behavior for the response.
- **Response Body**: The response body contains the actual data sent by the server in response to the request. It can be in various formats, depending on the content type specified in the response headers.

## HTTP status codes

### 2xx (Successful)

| **HTTP Status Code** | **Status Name** | **Description** | **Goal** |
|---|---|---|---|
| 200 | OK | The request has succeeded, and the server has returned the requested data. | Successful data retrieval. |
| 201 | Created | The request has resulted in the creation of a new resource on the server. | Resource creation. |
| 204 | No Content | The request was successful, but there is no response body (often used for DELETE requests). | Successful, no response body. |
| 206 | Partial Content | The server has fulfilled a partial GET request. | Successful partial data retrieval. |

### 3xx (Redirection)

| **HTTP Status Code** | **Status Name** | **Description** | **Goal** |
|---|---|---|---|
| 300 | Multiple Choices | Indicates multiple options for the resource that the client can choose from. | Provide alternative choices. |
| 301 | Moved Permanently | The requested resource has been permanently moved to a different URL. | Inform of permanent relocation. |
| 302 | Found (or 303 See Other) | The requested resource is temporarily located at a different URL. | Inform of temporary relocation. |
| 304 | Not Modified | The resource has not been modified since the last request; the client can use its cached copy. | Save bandwidth by using cache. |
| 307 | Temporary Redirect | Similar to 302, but indicates that the client should use the same method for the redirected request. | Inform of temporary redirection. |

### 4xx/5xx (Client and Server Errors)

| **HTTP Status Code** | **Status Name** | **Description** | **Goal** |
|---|---|---|---|
| 400 | Bad Request | The server cannot understand or process the client's request due to syntax or other errors. | Indicate client-side issues. |
| 401 | Unauthorized | Authentication is required, and the client failed to provide valid credentials. | Authentication required. |
| 403 | Forbidden | The client does not have permission to access the requested resource. | Deny unauthorized access. |
| 404 | Not Found | The requested resource could not be found on the server. | Indicate resource not found. |
| 405 | Method Not Allowed | The HTTP method used in the request is not allowed for the resource. | Specify allowed methods. |
| 422 | Unprocessable Entity | The server understands the request but cannot process it due to semantic errors. | Indicate request issues. |
| 429 | Too Many Requests | The client has sent too many requests in a given amount of time. | Rate limiting or congestion. |
| 500 | Internal Server Error | A generic error message indicating that the server encountered an unexpected condition. | Server encountered an error. |
| 501 | Not Implemented | The server does not support the functionality required to fulfill the request. | Feature not supported. |
| 502 | Bad Gateway | The server, while acting as a gateway or proxy, received an invalid response from the upstream server. | Gateway error. |
| 503 | Service Unavailable | The server is temporarily unable to handle the request, typically due to maintenance or overload. | Temporary unavailability. |
| 504 | Gateway Timeout | The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server. | Gateway timeout. |
| 505 | HTTP Version Not Supported | The server does not support the HTTP protocol version used in the request. | Unsupported protocol version. |
