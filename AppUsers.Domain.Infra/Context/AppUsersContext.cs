using Microsoft.EntityFrameworkCore;

namespace AppUsers.Domain.Infra.Context
{
    public class AppUsersContext : DbContext
    {
        public AppUsersContext(DbContextOptions options) : base(options) {}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

        }
    }
}
