using EFCoreConsoleApp.Models;

namespace EFCoreConsoleApp;

class Program
{
    // static void Main(string[] args)
    // {
    //     Console.WriteLine("Hello, World!");
    // }

    static void Main(string[] args)
    {
        using (var context = new RoiContext())
        {
            // Sample query to retrieve and display data
            var people = context.People.ToList();
            foreach (var person in people)
            {
                Console.WriteLine($"Id: {person.Id}, Name: {person.Name}, Phone: {person.Phone}, Country: {person.Country}");
            }
        }
    }
}
