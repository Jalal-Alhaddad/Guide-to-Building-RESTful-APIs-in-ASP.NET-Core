# Guide to Building RESTful APIs in ASP.NET-Core

- [Web Api](./1.%20Web%20Api/README.md)
  1. [What is a web API](/1.%20Web%20Api/1.%20What%20is%20a%20web%20API.md)
  2. [RESTful API Fundamentals](/1.%20Web%20Api/2.%20RESTful%20API%20Fundamentals.md)
  3. [HTTP (Hypertext Transfer Protocol)](<./1.%20Web%20Api/3.%20HTTP%20(Hypertext%20Transfer%20Protocol).md>)
- [ASP.NET Core Web API](./2.%20ASP.NET%20Core%20Web%20API/README.md)
  1. [Anatomy of the Project](./2.%20ASP.NET%20Core%20Web%20API/1.%20Anatomy%20of%20the%20Project.md)
  2. [NuGet & Package manager](./2.%20ASP.NET%20Core%20Web%20API/2.%20NuGet.md)
  3. [Console project in dotnet with entity framework](./2.%20ASP.NET%20Core%20Web%20API/3.%20Console%20project%20in%20dotnet%20with%20entity%20framework.md)
  4. [ASP.NET Core Web API project](/2.%20ASP.NET%20Core%20Web%20API/4.%20ASP.NET%20Core%20Web%20API%20project.md)
- [Data](./3.%20Data/1.%20Data.md)
  1. [Databases](./3.%20Data/2.%20Database.md)
  2. [ORM (Object-Relational Mapping)](./3.%20Data/3.%20ORM.md)
  3. [Entity Framework](./3.%20Data/4.%20Entity%20Framework.md)
  4. [Database Creation Approach](./3.%20Data/5.%20Database%20Creation%20Approach.md)
  5. [Data Transfer Object](./3.%20Data/6.%20Data%20Transfer%20Object.md)
  6. [JSON serialization](./3.%20Data/7.%20JSON%20serialization.md)
  7. [Sql Server](./3.%20Data/8.%20Ssqlserver.md)

## 1. What is a Web API?

A Web API (Application Programming Interface) is a set of rules and protocols that allow one software application to interact with another over the internet. It provides web applications with functionalities like searching, querying, or modifying resources.

> Think of it as a waiter taking the order and delivering food in a restaurant. The client, make a request (order), and the kitchen (server) processes it and sends back the food (response).

## 2. Why Web APIs are Important

- Enabling data exchange: They facilitate the exchange of data between different systems, devices, and platforms.
- Integrating services: Web APIs allow to integrate your application with external services, [external services](1.%20Web%20Api/1.%20What%20is%20a%20web%20API.md/#external-services)

## 3. ASP.NET Core Benefits

- **Cross-platform**: Works on Windows, Linux, and macOS.
- **High-performance**: Designed for speed and scalability.
- **Open-source**: Access to the source code for customization.
- **Robust ecosystem**: Rich set of libraries and tools for web development.

## 4. Prerequisites and Tools

- **Prerequisites**:
  - Basic knowledge of C#
  - Basic knowledge of database (Sql Server)
- Tools:
  - Microsoft Visual Studio Code (cross-platform)
  - Microsoft .NET Core SDK 7
  - Microsoft SQL Server Express LocalDB
- Microsoft Visual Studio Code Extensions
  - **C# Dev Kit**
  - **SQL Server (mssql)**
  - **REST Client**

## 5. Installation and Setup

- [Microsoft Visual Studio Code](https://code.visualstudio.com/Download)
- [Microsoft .NET Core SDK 7](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [SQL Server Express 2022](https://go.microsoft.com/fwlink/?linkid=2215160)

## 6. Useful Links

- [SQL Server Express LocalDB documentation](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver16)
- [.NET documentation](https://learn.microsoft.com/en-us/dotnet/)
