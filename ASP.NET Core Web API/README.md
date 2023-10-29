# ASP.NET Core Web API

## Key concepts

- **HTTP Methods**: ASP.NET Core Web API is built on the HTTP protocol, and it leverages standard HTTP methods for interactions with resources. The primary HTTP methods used in RESTful APIs are:
  - **GET**: Used to retrieve data from the server.
  - **POST**: Used to create new resources on the server.
  - **PUT**: Used to update existing resources or create them if they don't exist.
  - **DELETE**: Used to remove resources from the server.
- **Routing**: Routing is the process of determining how an HTTP request should be handled and which controller action should process it. In ASP.NET Core Web API, routing is configured to map incoming requests to specific controller actions based on the request's URI.
- **Controllers**: Controllers are responsible for handling incoming HTTP requests and returning appropriate responses. In a Web API, controllers define the available endpoints, map to specific HTTP methods, and contain the logic to process these requests.
- **Action Methods**: Action methods are the individual methods within a controller that respond to HTTP requests. Each action method corresponds to a specific endpoint defined by a combination of HTTP method, route, and controller.
- **Model Binding**: Model binding is the process of mapping incoming request data to parameters of action methods. ASP.NET Core Web API automatically binds data from the request to action method parameters, simplifying input validation and processing.
- **Request and Response Formats**: Web APIs handle various data formats for requests and responses. JSON is the most commonly used format for data exchange, but Web APIs can also support XML and other formats. Content negotiation is used to determine the appropriate format for responses.
- **Data Transfer Objects (DTOs)**: Data Transfer Objects are classes used to represent and transfer data between clients and the Web API. DTOs define the structure of data sent and received by the API, and they help decouple the API's internal data model from the external representation.
- **Middleware**: Middleware components are used in ASP.NET Core to process HTTP requests and responses. Middleware can be added to the application pipeline for tasks such as authentication, authorization, logging, and exception handling.
- **Dependency Injection**: ASP.NET Core provides built-in support for dependency injection, allowing you to inject services and components into your controllers and other application components. This promotes modular, testable, and maintainable code.
- **Content Negotiation**: Content negotiation allows clients to specify the desired response format (e.g., JSON or XML) in the request's Accept header. The server then responds with data in the requested format, if available.
- **Authentication and Authorization**: ASP.NET Core Web API includes features for handling authentication and authorization, allowing you to secure your API by verifying the identity of users and controlling access to resources.
- **Versioning**: API versioning is a way to manage changes and updates to your API over time. ASP.NET Core Web API supports different versioning strategies to ensure backward compatibility with existing clients.
