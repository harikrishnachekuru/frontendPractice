using TaskApi.Models;

namespace TaskApi.Data
{
    public static class TaskData
    {
        public static List<TaskModel> Tasks = new()
        {
            new TaskModel
            {
                Id = "task-123",
                Title = "Complete project proposal",
                Description = "Write and review project proposal document",
                Dependencies = new List<string> {"task-456", "task-789"},
                CreatedAt = DateTime.Parse("2024-03-20T10:00:00Z"),
                UpdatedAt = DateTime.Parse("2024-03-20T10:00:00Z")
            },
            new TaskModel
            {
                Id = "task-456",
                Title = "Research requirements",
                Description = "Research all required details",
                Dependencies = new(),
                CreatedAt = DateTime.Parse("2024-03-20T09:00:00Z"),
                UpdatedAt = DateTime.Parse("2024-03-20T09:00:00Z")
            },
            new TaskModel
            {
                Id = "task-789",
                Title = "Initial brainstorming",
                Description = "Team brainstorming session",
                Dependencies = new List<string> {"test-1"},
                CreatedAt = DateTime.Parse("2024-03-20T08:00:00Z"),
                UpdatedAt = DateTime.Parse("2024-03-20T08:00:00Z")
            },
            new TaskModel
            {
                Id = "test-1",
                Title = "Sanity Purpose of first entry",
                Description = "Description",
                Dependencies = new (),
                CreatedAt = DateTime.Parse("2024-03-20T10:00:00Z"),
                UpdatedAt = DateTime.Parse("2024-03-20T10:00:00Z")
            },
        };
    }
}
