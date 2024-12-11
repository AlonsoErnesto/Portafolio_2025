using System;
using System.Collections.Generic;
using System.Linq;

namespace Portfolio
{
    public record PersonalInfo(string Name, string Role, int Experience, List<string> Technologies);

    public class Program
    {
        public static void Main()
        {
            var info = new PersonalInfo(
                Name: "Ernesto Alonso",
                Role: "Software Engineer",
                Experience: 1,
                Technologies: new List<string> { "C#", ".NET Core", "Entity Framework", "LINQ", "Blazor" }
            );

            DisplayInfo(info);
        }

        private static void DisplayInfo(PersonalInfo info)
        {
            Console.WriteLine("=== About Me ===");
            Console.WriteLine($"Name: {info.Name}");
            Console.WriteLine($"Role: {info.Role}");
            Console.WriteLine($"Experience: {info.Experience} year{(info.Experience > 1 ? "s" : "")}");
            Console.WriteLine("\nTechnologies I Use:");

            info.Technologies.ForEach(tech => Console.WriteLine($"- {tech}"));

            Console.WriteLine("\nThank you for reviewing my profile!");
        }
    }
}
