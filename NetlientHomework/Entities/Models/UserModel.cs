using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NetlientHomework.Entities.Models;

public class UserModel
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    [Required]
    public string UserName { get; set; }
    [Required]
    public string Password { get; set; }
}