# Data Transfer Object

## DTO

**DTO** stands for **Data Transfer Object**. It's a design pattern used in software development to facilitate the efficient and secure transfer of data between different parts of an application, especially when those parts exist in different contexts or layers. DTOs are essentially objects that carry data between processes and are commonly used in scenarios like web APIs, distributed systems, and data transformation.

### Definition

A DTO is a simple, often immutable, and serializable object that represents a subset of data from a more complex domain model or entity. It typically includes only the fields or properties that need to be transferred between components, services, or layers of an application.

### Key Concepts

- **Simplification**: DTOs simplify complex data structures by providing a compact representation tailored for specific use cases, reducing unnecessary data and improving performance.
- **Data Isolation**: DTOs isolate data for transfer, which can enhance security and privacy by preventing direct exposure of sensitive or internal information.
- **Serialization**: DTOs are often designed to be easily serializable and deserializable, making them suitable for network communication and storage.

### Usage

**DTOs** are used in various scenarios, including:

- **Web APIs**: When designing APIs, DTOs help define the shape of the data that clients can send or receive, ensuring a clear and standardized contract.
- **Data Transformation**: When data needs to be converted between different representations or formats, such as from a database entity to a JSON object for an API response.
- **Remote Communication**: In distributed systems, DTOs enable data exchange between microservices or remote components in a structured and efficient way.
- **Reducing Overhead**: DTOs can help reduce data overhead by excluding unnecessary fields, leading to improved performance, especially in network communication.
- **Versioning**: When evolving an API, DTOs can help maintain backward compatibility by allowing new fields to be added without affecting existing clients that may not use them.

```csharp
public class PersonDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Phone { get; set; }
        public int? DepartmentId { get; set; }
        public string? Street { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Zip { get; set; }
        public string? Country { get; set; }
        public string? DepartmentName { get; set; }
    }
}
```

## Mapping

**Mapping** in software development refers to the process of transforming data from one representation to another, often between different objects or structures. This is a common task when working with databases, APIs, and various layers of an application. Mapping helps ensure that data is correctly transferred and used as intended

### Key Concepts of Mapping

- **Data Transformation**: Mapping involves transforming data from one format, such as database records or API responses, into another format, typically objects or models used within an application.
- **Field-to-Field Correspondence**: Mappings typically involve matching fields or properties between the source and destination data structures. For example, a database column may map to an object's property.
- **Complex Data Structures**: Mapping can handle more complex scenarios, including nested objects, collections, and hierarchical data.
- **Bi-Directional Mapping**: In some cases, mapping may need to work in both directions, converting data from a source to a destination and vice versa.

### Mapping Tools (e.g., AutoMapper)

Mapping tools are software libraries or frameworks designed to simplify the mapping process. These tools automate the assignment of values from one object to another, reducing the need for manual mapping code.

**AutoMapper** is a popular mapping tool in the .NET ecosystem.

#### Alternative mapping libraries and frameworks

- **Mapster**: Mapster is a fast and versatile object-to-object mapping library for .NET. It provides a simple and fluent API for mapping and supports advanced mapping configurations.
- **TinyMapper**: TinyMapper is another lightweight and fast mapper for .NET. It focuses on simplicity and ease of use for basic object-to-object mapping.

#### AutoMapper sample code

- MappingProfile

```csharp
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Person, PersonDto>()
            .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => src.Department != null ? src.Department.Name : ""));

            CreateMap<PersonDto, Person>()
            .ForMember(dest => dest.Department, opt => opt.Ignore());
        }
    }
```

- Configuring the main

```csharp
builder.Services.AddAutoMapper(typeof(MappingProfile));

var mapper = app.Services.GetRequiredService<IMapper>();
mapper.ConfigurationProvider.AssertConfigurationIsValid();
```

- Sample Api

```csharp
app.MapGet("api/people/{id}", async (int id, ApplicationDbContext dbContext) =>
{
    var person = await dbContext.People
        .Include(p => p.Department)
        .FirstOrDefaultAsync(p => p.Id == id);

    if (person == null)
    {
        return Results.NotFound();
    }

    var personDto = mapper.Map<PersonDto>(person);
    return Results.Ok(personDto);
});
```

- In a controller

```csharp
    public class PersonController : ControllerBase
    {
        private readonly HaddadContext _context;
        private readonly IMapper _mapper;

        public PersonController(HaddadContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
```
