# Guide to Building RESTful APIs in ASP.NET-Core

- [Data](/Data/Data.md)
  - [Databases](/Data/database.md)
  - [Entity Framework](./Data/Entity%20Framework.md)
  - [Database Creation Approach](./Data/Database%20Creation%20Approach.md)
  - [ORM (Object-Relational Mapping)](./Data/ORM.md)
  - [Sql Server](/Data/sqlserver.md)
  - [Data Transfer Object](./Data/Data%20Transfer%20Object.md)
  - [JSON serialization](./Data/JSON%20serialization.md)
- [Web Api](./Web%20Api/README.md)
  - [What is a web API](./Web%20Api/What%20is%20a%20web%20API.md)
  - [RESTful API Fundamentals](./Web%20Api/RESTful%20API%20Fundamentals.md)
  - [HTTP (Hypertext Transfer Protocol)](<./Web%20Api/HTTP%20(Hypertext%20Transfer%20Protocol).md>)
- [ASP.NET Core Web API](/ASP.NET%20Core%20Web%20API/README.md)
  - [NuGet & Package manager](/ASP.NET%20Core%20Web%20API/NuGet.md)
  - [Console project in dotnet with entity framework](/ASP.NET%20Core%20Web%20API/Console%20project%20in%20dotnet%20with%20entity%20framework.md)
  - [ASP.NET Core Web API project](/ASP.NET%20Core%20Web%20API/ASP.NET%20Core%20Web%20API%20project.md)

## 1. What is a Web API?

A Web API (Application Programming Interface) is a set of rules and protocols that allow one software application to interact with another over the internet. It provides web applications with functionalities like searching, querying, or modifying resources.

> Think of it as a waiter taking the order and delivering food in a restaurant. The client, make a request (order), and the kitchen (server) processes it and sends back the food (response).

## 2. Why Web APIs are Important

- Enabling data exchange: They facilitate the exchange of data between different systems, devices, and platforms.
- Integrating services: Web APIs allow to integrate your application with external services, [external services](1.%20Web%20Api/1.%20What%20is%20a%20web%20API.md/External%20Services)

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

## 5. Installation and Setup

- [Microsoft Visual Studio Code](https://code.visualstudio.com/Download)
- [Microsoft .NET Core SDK 7](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [SQL Server Express 2022](https://go.microsoft.com/fwlink/?linkid=2215160)

## 6. Useful Links

- [SQL Server Express LocalDB documentation](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver16)
- [.NET documentation](https://learn.microsoft.com/en-us/dotnet/)
