using ProjectApi.Models;

namespace ProjectApi.Data
{
    public static class ProjectData
    {
        public static List<ProjectModel> Pd = new()
        {
            new ProjectModel
            {
                Id = "Task-12",
                Title = "Title",
                Description = "Title Description",
                Dependancies = new List<string> {"Task-2", "Task-3"},
                CreatedAt = DateTime.Parse("2023-12-23T12:00:30Z"),
                UpdatedAt = DateTime.Parse("2023-12-23T12:00:30Z")
            },
            new ProjectModel
            {
                Id = "Task-2",
                Title = "Title",
                Description = "Title Description",
                Dependancies = new (),
                CreatedAt = DateTime.Parse("2023-12-23T12:00:30Z"),
                UpdatedAt = DateTime.Parse("2023-12-23T12:00:30Z")
            },
            new ProjectModel
            {
                Id = "Task-3",
                Title = "Title",
                Description = "Title Description",
                Dependancies = new List<string> {"Task-4"},
                CreatedAt = DateTime.Parse("2023-12-23T12:00:30Z"),
                UpdatedAt = DateTime.Parse("2023-12-23T12:00:30Z")
            },
            new ProjectModel
            {
                Id = "Task-4",
                Title = "Title",
                Description = "Title Description",
                Dependancies = new List<string> {"Task-2, Task-3"},
                CreatedAt = DateTime.Parse("2023-12-23T12:00:30Z"),
                UpdatedAt = DateTime.Parse("2023-12-23T12:00:30Z")
            }
        };
    }
}