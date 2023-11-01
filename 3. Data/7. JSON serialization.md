# JSON serialization

To configures the JSON serialization options for an ASP.NET Core application. Specifically configures the `ReferenceHandler` property of the `JsonOptions` to `Preserve`. This setting affects how JSON serialization handles object references when converting objects to JSON format.

Registration in Dependency Injection Container

```csharp
builder.Services.Configure<JsonOptions>(options =>
{
    options.SerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
});
```

## Use Cases

- **Circular References**: This configuration is particularly useful when you have circular references within your data model. Without preserving references, the JSON serialization process might enter an infinite loop when trying to serialize circular references.
- **Default Value**: `ReferenceHandler.Ignore`:
By default, the `ReferenceHandler` is set to `Ignore`, which means that the JSON serializer will ignore object references. This is the typical behavior in most JSON serialization scenarios.
