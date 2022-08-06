using AppUsers.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppUsers.Domain.Infra.Configurations
{
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(x => x.Nome).IsRequired().HasColumnType("varchar(20)");
            builder.Property(x => x.Sobrenome).IsRequired().HasColumnType("varchar(20)");
            builder.Property(x => x.Email).IsRequired().HasColumnType("varchar(50)");
            builder.Property(x => x.DataNascimento).IsRequired().HasColumnType("Date");
            builder.Property(x => x.Escolaridade).IsRequired().HasColumnType("int");
        }
    }
}
