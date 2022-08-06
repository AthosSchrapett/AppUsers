using AppUsers.Domain.Core.Interfaces.Repositories;
using AppUsers.Domain.Infra.Context;
using AppUsers.Domain.Models;

namespace AppUsers.Domain.Infra.Repositories
{
    internal class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(AppUsersContext appUsersContext) : base(appUsersContext)
        {
        }
    }
}
