using Microsoft.AspNetCore.Mvc;
using ProjectApi.Models;
using ProjectApi.Data;

namespace ProjectApi.Controller
{
    [ApiController]
    [Route("Projects")]
    public class ProjectController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetDetails()
        {
            return Ok(new { Projects = ProjectData.Pd });
        }

        [HttpGet("{PdId}")]
        public IActionResult GetByIdDetails(string PdId)
        {
            var Task = ProjectData.Pd.FirstOrDefault(p => p.Id == PdId);
            if (Task == null) return NotFound();
            return Ok(Task);
        }

        [HttpGet("Ordering")]
        public IActionResult GetOrdering()
        {
            List<string> result = new();
            HashSet<string> visited = new();

            void DFS(string PdId)
            {
                if(visited.Contains(PdId)) return;
                visited.Add(PdId);

                var Task = ProjectData.Pd.FirstOrDefault(p => p.Id == PdId);
                if (Task == null) return;

                foreach(var dep in Task.Dependancies)
                {
                    DFS(dep);
                }
                result.Add(PdId);
            }
            foreach(var p in ProjectData.Pd)
            {
                DFS(p.Id);
            }
            return Ok(result);
        }
    }
}