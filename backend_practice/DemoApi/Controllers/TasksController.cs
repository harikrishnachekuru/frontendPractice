using Microsoft.AspNetCore.Mvc;
using Task.Models;
using TaskApi.Data;

namespace TaskApi.Controllers
{
    [ApiController]
    [Route("tasks")]
    public class TasksController : ControllerBase
    {
        // GET /tasks
        [HttpGet]
        public IActionResult GetAllTasks()
        {
            return Ok(new { tasks = TaskData.Tasks });
        }

        // GET /tasks/{taskId}
        [HttpGet("{taskId}")]
        public IActionResult GetTaskById(string taskId)
        {
            var task = TaskData.Tasks.FirstOrDefault(t => t.Id == taskId);
            if (task == null) return NotFound();

            return Ok(task);
        }

        // GET /tasks/ordering
        [HttpGet("ordering")]
        public IActionResult GetTaskOrdering()
        {
            // Simple topological order ? dependencies first
            List<string> result = new();
            HashSet<string> visited = new();

            void DFS(string taskId)
            {
                if (visited.Contains(taskId)) return;

                visited.Add(taskId);

                var task = TaskData.Tasks.FirstOrDefault(t => t.Id == taskId);
                if (task == null) return;

                foreach (var dep in task.Dependencies)
                {
                    DFS(dep);
                }

                result.Add(taskId);
            }

            foreach (var t in TaskData.Tasks)
            {
                DFS(t.Id);
            }

            return Ok(result);
        }
    }
}
