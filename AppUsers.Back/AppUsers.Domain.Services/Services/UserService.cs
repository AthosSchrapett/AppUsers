using AppUsers.Domain.Interfaces.Services;
using AppUsers.Domain.Interfaces.UnitOfWork;
using AppUsers.Domain.Models;

namespace AppUsers.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void AddUser(User user)
        {
            _unitOfWork.UserRepository.Add(user);
            _unitOfWork.Commit();
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
