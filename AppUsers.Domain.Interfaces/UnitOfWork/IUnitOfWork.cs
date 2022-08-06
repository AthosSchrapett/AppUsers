using AppUsers.Domain.Interfaces.Repositories;

namespace AppUsers.Domain.Interfaces.UnitOfWork
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; }
        public Task<bool> Commit();
        public Task Rollback();
    }
}
