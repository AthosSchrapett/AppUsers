using AppUsers.Domain.Models;
using AppUsers.Domain.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AppUsers.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        [HttpGet]
        public IActionResult UserGet()
        {
            var users = _userService.GetAllUsers();

            if (users == null)
                return NotFound();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult UserGet(int id)
        {
            var user = _userService.GetUserById(id);

            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpPost]
        public void UserPost([FromBody] User user)
        {
            _userService.AddUser(user);
        }

        [HttpPut("{id}")]
        public void UserPut([FromBody] User user)
        {
            _userService.UpdateUser(user);
        }

        [HttpDelete("{id}")]
        public void UserDelete(int id)
        {
            _userService.DeleteUser(id);
        }
    }
}
