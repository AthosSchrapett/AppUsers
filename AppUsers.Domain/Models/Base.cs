namespace AppUsers.Domain.Models
{
    public class Base
    {
        public int Id { get; set; }

        public Base()
        {
            Random randNum = new Random();
            Id = randNum.Next();
        }
    }
}
