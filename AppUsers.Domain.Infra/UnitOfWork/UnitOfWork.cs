using AppUsers.Domain.Infra.Context;
using AppUsers.Domain.Infra.Repositories;
using AppUsers.Domain.Interfaces.Repositories;
using AppUsers.Domain.Interfaces.UnitOfWork;

namespace AppUsers.Domain.Infra
{
    public class UnitOfWork : IUnitOfWork
    {
        protected IUserRepository _userRepository;

        private readonly AppUsersContext _appUsersContext;

        public UnitOfWork(AppUsersContext appUsersContext)
        {
            _appUsersContext = appUsersContext;
        }

        public IUserRepository UserRepository
        {
            get => _userRepository != null ? _userRepository : _userRepository = new UserRepository(_appUsersContext);
        }

        public Task<bool> Commit()
        {
            bool success = false;
            try
            {
                _appUsersContext.SaveChanges();
                success = true;
            }
            catch (Exception ex)
            {
                Rollback();
                throw new Exception(ex.Message);
            }

            return Task.FromResult(success);
        }

        public Task Rollback() => Task.CompletedTask;

        public void Dispose() => _appUsersContext.Dispose();
    }
}
