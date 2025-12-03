public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public int Marks { get; set; }

    public Student(string name, int age, int marks)
    {
        Name = name;
        Age = age;
        Marks = marks;
    }

    public void Display()
    {
        Console.WriteLine("Name: " + Name);
        Console.WriteLine("Age " + Age);
    }
}