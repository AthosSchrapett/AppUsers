using AppUsers.Domain.Core.Interfaces.Repositories;
using AppUsers.Domain.Infra.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppUsers.Domain.Infra.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly AppUsersContext _appUsersContext;

        public BaseRepository(AppUsersContext appUsersContext)
        {
            _appUsersContext = appUsersContext;
        }

        public T GetById(int id)
        {
            return _appUsersContext.Set<T>().Find(id);
        }

        public void Add(T entity)
        {
            _appUsersContext.Set<T>().Add(entity);
        }

        public void Update(T entity)
        {
            _appUsersContext.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }

        public IEnumerable<T> GetAll()
        {
            return _appUsersContext.Set<T>();
        }

        public void Delete(T entity)
        {
            _appUsersContext.Set<T>().Remove(entity);
        }
    }
}
