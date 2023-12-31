using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NetlientHomework.Entities.Models;

public class DataModel
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    [Required]
    public string ItemNumber { get; set; }
    [Required]
    public string ItemName { get; set; }
    [Required]
    public int NetPrice { get; set; }
    [Required]
    public double Tax { get; set; }
}