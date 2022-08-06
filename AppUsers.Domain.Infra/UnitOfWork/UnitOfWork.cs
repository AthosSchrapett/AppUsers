using AppUsers.Domain.Core.Interfaces.Repositories;
using AppUsers.Domain.Infra.Context;
using AppUsers.Domain.Infra.Repositories;
using AppUsers.Domain.Interfaces.Repositories.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
                success = false;
            }

            return Task.FromResult(success);
        }

        public Task Rollback() => Task.CompletedTask;
    }
}
