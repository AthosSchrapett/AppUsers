using AppUsers.Domain.Infra.Configurations;
using AppUsers.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace AppUsers.Domain.Infra.Context
{
    public class AppUsersContext : DbContext
    {
        public AppUsersContext(DbContextOptions options) : base(options) {}

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new UserConfiguration());
        }
    }
}
