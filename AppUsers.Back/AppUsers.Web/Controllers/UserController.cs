using AppUsers.Domain.Interfaces.Services;
using AppUsers.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace AppUsers.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

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
            try
            {
                var user = _userService.GetUserById(id);

                if (user == null)
                    return NotFound();
                return Ok(user);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public IActionResult UserPost([FromBody] User user)
        {
            try
            {
                if (DateIsValid(user.DataNascimento))
                    _userService.AddUser(user);
                return Ok(user);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPut("{id}")]
        public void UserPut([FromBody] User user)
        {
            try
            {
                _userService.UpdateUser(user);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpDelete("{id}")]
        public void UserDelete(int id)
        {
            try
            {
                _userService.DeleteUser(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        private bool DateIsValid(DateTime dataNascimento)
        {
            return dataNascimento < DateTime.Now ? true : throw new Exception("Data de Nascimento Invalida");
        }
    }
}
