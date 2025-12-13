using Microsoft.AspNetCore.Mvc;
using TaskApi.Models;
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
        //[HttpPost]
        //public IActionResult CreateTask([FromBody] TaskModel newTask)
        //{
        //    newTask.Id = $"task-{Guid.NewGuid().ToString().Substring(0, 6)}";
        //    newTask.CreatedAt = DateTime.UtcNow;
        //    newTask.UpdatedAt = DateTime.UtcNow;

        //    tasks.Add(newTask);
        //    return Ok(newTask);
        //}


        //[HttpPut("{id}")]
        //public IActionResult UpdateTask(string id, [FromBody] TaskModel updated)
        //{
        //    var existing = tasks.FirstOrDefault(t => t.Id == id);
        //    if (existing == null)
        //        return NotFound();

        //    existing.Title = updated.Title;
        //    existing.Description = updated.Description;
        //    existing.Dependencies = updated.Dependencies;
        //    existing.UpdatedAt = DateTime.UtcNow;

        //    return Ok(existing);
        //}

        //[HttpDelete("{id}")]
        //public IActionResult DeleteTask(string id)
        //{
        //    var task = Tasks.FirstOrDefault(t => t.Id == id);
        //    if (task == null)
        //        return NotFound();

        //    Tasks.Remove(task);
        //    return Ok(new { message = "Task deleted" });
        //}

    }
}
