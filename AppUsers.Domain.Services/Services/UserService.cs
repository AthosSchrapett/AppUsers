using AppUsers.Domain.Core.Interfaces.Services;
using AppUsers.Domain.Infra;
using AppUsers.Domain.Models;

namespace AppUsers.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly UnitOfWork _unitOfWork;

        public void AddUser(User user)
        {
            _unitOfWork.UserRepository.Add(user);
        }        

        public IEnumerable<User> GetAllUsers()
        {
            return _unitOfWork.UserRepository.GetAll();
        }

        public User GetUserById(int id)
        {
            return _unitOfWork.UserRepository.GetById(id);
        }

        public void UpdateUser(User user)
        {
            _unitOfWork.UserRepository.Update(user);
            _unitOfWork.Commit();
        }
        public void DeleteUser(int id)
        {
            User user = _unitOfWork.UserRepository.GetById(id);
            _unitOfWork.UserRepository.Delete(user);
            _unitOfWork.Commit();
        }
    }
}
