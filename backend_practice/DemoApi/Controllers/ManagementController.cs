using Microsoft.AspNetCore.Mvc;
using ManagementApi.Models;
using ManagementApi.Data;

namespace ManagementApi.Controllers
{
    [ApiController]
    [Route("MM")]

    public class ManagementController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllDetails()
        {
            return Ok(new { MM = ManagementData.MM });
        }

        [HttpGet("{MMId}")]
        public IActionResult GetById(string MMId)
        {
            var Task = ManagementData.MM.FirstOrDefault(x => x.Id == MMId);
            if(Task == null)
            {
                return NotFound();
            }
            return Ok(Task);
        }

        [HttpGet("Ordering")]
        public IActionResult GetOrdering()
        {
            List<string> result = new();
            HashSet<string> visited = new();

            void DFS(string MMId){
                if (visited.Contains(MMId)) return;

                visited.Add(MMId);

                var Test = ManagementData.MM.FirstOrDefault(x=> x.Id == MMId);
                if (Test == null) return;

                foreach(var dep in Test.Dependencies)
                {
                    DFS(dep);
                }
                result.Add(MMId);
            }
            foreach(var t in ManagementData.MM)
            {
                DFS(t.Id);
            }
            return Ok(result);
        }
    }

}