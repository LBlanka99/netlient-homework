namespace NetlientHomework.Exceptions;

public class UnsuccessfulLoginException : Exception
{
    public UnsuccessfulLoginException(string? message) : base(message)
    {
    }
}