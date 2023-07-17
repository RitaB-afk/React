using Microsoft.EntityFrameworkCore;

namespace Quiz_API.Models
{
    public class QuizDbContext: DbContext
    {
        public QuizDbContext()
        {

        }
        public QuizDbContext(DbContextOptions<QuizDbContext> options): base(options)
        {


        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }

    }
}
