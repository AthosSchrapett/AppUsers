using AppUsers.Domain.Infra.Context;
using AppUsers.Domain.Interfaces.Repositories;
using AppUsers.Domain.Models;

namespace AppUsers.Domain.Infra.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(AppUsersContext appUsersContext) : base(appUsersContext)
        {
        }
    }
}
