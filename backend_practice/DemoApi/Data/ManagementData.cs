using ManagementApi.Models;

namespace ManagementApi.Data
{
    public static class ManagementData
    {
        public static List<ManagementModel> MM = new()
        {
            new ManagementModel
            {
                Id = "test-12",
                Title = "Sanity Purpose",
                Description = "Description",
                Dependencies = new List<string> {"task-456", "task-789"},
                CreatedAt = DateTime.Parse("2024-03-20T10:00:00Z"),
                UpdatedAt = DateTime.Parse("2024-03-20T10:00:00Z")
            },
            new ManagementModel
            {
                Id = "test-1",
                Title = "Sanity Purpose of first entry",
                Description = "Description",
                Dependencies = new (),
                CreatedAt = DateTime.Parse("2024-03-20T10:00:00Z"),
                UpdatedAt = DateTime.Parse("2024-03-20T10:00:00Z")
            },
            new ManagementModel
            {
                Id = "test-2",
                Title = "Sanity Purpose of first entry",
                Description = "Description",
                Dependencies = new (),
                CreatedAt = DateTime.Parse("2024-03-20T10:00:00Z"),
                UpdatedAt = DateTime.Parse("2024-03-20T10:00:00Z")
            }
        };
    }
}