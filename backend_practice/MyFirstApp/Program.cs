// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

using System;
using MyProject;
using System.Collections.Generic;

//Learning the deletgate usage
public delegate void PrintMsg(string msg);

//MultiCast Delegate creation
public delegate void Calc(int x, int y);

class Contact
{
    public string Name { get; set; }
    public int Phone { get; set; }
}

class Program
{
    //As Delegate is created above creating a methods and using it
    static void Print(string msg)
    {
        Console.WriteLine(msg);
    }

    //Multicast fields
    public static void Add(int x, int y)
    {
        var Temp = x + y;
        Console.WriteLine($"The Sum of {x}, {y} is: {Temp}");
    } 
    public static void Mul(int x, int y)
    {
        var Temp = x* y;
        Console.WriteLine($"The Mul of {x}, {y} is: {Temp}");
    }

    static void AddContact(List<Contact> contacts)
    {
        Console.WriteLine("Enter your Name");
        string name = Console.ReadLine();

        Console.WriteLine("Enter your Mobile Number");
        if (!int.TryParse(Console.ReadLine(), out int phone))
        {
            Console.WriteLine("Invalid phone number.");
            return;
        }

        contacts.Add(new Contact { Name = name, Phone = phone });
        Console.WriteLine("Added");
    }

    static void ListContact(List<Contact> contacts)
    {
        if (contacts.Count == 0)
        {
            Console.WriteLine("No Contacts available");
            return;
        }

        for (int i = 0; i < contacts.Count; i++)
        {
            Console.WriteLine($"{i + 1}. {contacts[i].Name} - {contacts[i].Phone}");
        }
    }

    static void RemoveContact(List<Contact> contacts)
    {
        Console.Write("Enter the number to remove a contact: ");
        if (!int.TryParse(Console.ReadLine(), out int y))
        {
            Console.WriteLine("Invalid number.");
            return;
        }

        if (y < 1 || y > contacts.Count)
        {
            Console.WriteLine("Number out of range.");
            return;
        }

        contacts.RemoveAt(y - 1);
        Console.WriteLine("Removed.");
    }

    public static void Main()
    {
        Console.WriteLine("Enter Your Name: ");
        string name = Console.ReadLine();
        Console.WriteLine("Enter your age");
        int age = Convert.ToInt32(Console.ReadLine());


        if (age >= 12 && age < 19)
        {
            Console.WriteLine("He started his youth");
        }
        else
        {
            Console.WriteLine("He yet to reach that stage");
        }

        bool isLearning = true;

        Console.WriteLine("Welcome " + name + "! you are " + age + " years old and learning C#");

        Console.WriteLine("Enter the number for Multiplication");
        int num = Convert.ToInt32(Console.ReadLine());

        for (int i = 1; i <= 10; i++)
        {
            int multi = num * i;
            Console.WriteLine($"{num} * {i} = {multi}");
            Console.WriteLine(num + " * " + i + " = " + result);
        }


        // Creating Math Operations in separate file and having it using in this program.cs file

        Console.Write("Enter first number: ");
        int a = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter second number: ");
        int b = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("\nChoose Operation:");
        Console.WriteLine("1 - Add");
        Console.WriteLine("2 - Subtract");
        Console.WriteLine("3 - Multiply");
        Console.WriteLine("4 - Divide");

        Console.Write("Enter your choice: ");
        int choice = Convert.ToInt32(Console.ReadLine());

        int result = 0;

        switch (choice)
        {
            case 1:
                result = MathOperations.Add(a, b);
                break;
            case 2:
                result = MathOperations.Sub(a, b);
                break;
            case 3:
                result = MathOperations.Mul(a, b);
                break;
            case 4:
                result = MathOperations.Div(a, b);
                break;
            default:
                Console.WriteLine("Invalid choice");
                return;
        }

        Console.WriteLine($"\nResult = {result}");


        var students = new List<string> { "Krish", "Bhagya" };
        students.Add("Hari");

        foreach (var student in students)
        {
            Console.WriteLine(student);
        }

        Console.WriteLine(students.Count);

        Student s1 = new Student("Test", 23, 82);

        s1.Display();

        BankAccount b1 = new BankAccount("Hari", 25);

        b1.Deposit(12);
        b1.Withdraw(5);
        b1.DisplayBalance();

        List<int> nums = new List<int>();
        nums.Add(1);
        nums.Add(2);
        nums.Add(3);
        nums.Add(4);
        nums.Add(5);

        Console.WriteLine("All numbers:");
        foreach (int n in nums)
        {
            Console.WriteLine(n);
            Console.WriteLine("Total Sum: " + nums.Sum());
            Console.WriteLine("Highest Number: " + nums.Max());
        }

        // Total sum
        int sum = 0;
        foreach (int n in nums)
        {
            sum += n;
        }
        Console.WriteLine("\nTotal Sum: " + sum);

        // Highest number
        int highest = nums[0];
        foreach (int n in nums)
        {
            if (n > highest)
                highest = n;
        }
        Console.WriteLine("Highest Number: " + highest);

        List<int> numbs = new List<int> { 5, 10, 15, 20, 25, 30 };

        var result = numbs.Where(n => n > 15);
        foreach (var n in result)
        {
            Console.WriteLine(n);
        }

        var newRes = numbs.Where(n => n % 2 == 0);

        foreach (int n in newRes)
        {
            Console.WriteLine(n);
        }

        Console.WriteLine($"Highest Number: {numbs.Max()}");
        Console.WriteLine($"Sum of the Numbers: {numbs.Sum()}");


        //Calling the Delage to print it 
        PrintMsg pm = Print;
        pm("Delegate creation");

        //Method Creation and calling of Multicast delegates
        Calc cal = Add;
        cal += Mul;
        // Note If the return type anything else apart from void it will be stored only the last result.
        cal(1, 2);

        //Methods – Parameter Passing
        void Change(int x)
        {
            x = 50;
        }
        // By Reference
        //void Change(ref int x)
        //{
        //    x = 50;
        //}

        //out Parameter
        void GetValues(out int x)
        {
            x = 10;
        }


        // String Comparision

        string a = "hello";
        string b = "HELLO";

        bool result2 = a.Equals(b, StringComparison.OrdinalIgnoreCase);
        Console.WriteLine(result2);

        // Try Catch Block 

        Console.WriteLine("Please Enter the Number: ");
        String s = Console.ReadLine();

        if(!int.TryParse(s, out int x))
        {
            Console.WriteLine("Invalid Number please enter valid number only");
        }
        else
        {
            try
            {
                int result = 100 / x;
                Console.WriteLine("100 / " + x + " = " + result);
            }
            catch(DivideByZeroException)
            {
                Console.WriteLine("Cannot divide by zero.");
            }
        }

        // Manage Contact with Try catch block 

        var contacts = new List<Contact>();
        bool isquit = false;

        while (!isquit)
        {
            Console.WriteLine("1 Add  2 List  3 Remove  4 Exit");
            Console.Write("Choice: ");
            string choice = Console.ReadLine();

            switch(choice)
            {
                case "1":
                    AddContact(contacts);
                    break;

                case "2":
                    ListContact(contacts); 
                    break;

                case "3":
                    RemoveContact(contacts);
                    break;

                case "4":
                    isquit = true;
                    break;

                default:
                    Console.WriteLine("Invalid choice.");
                    break;
            }
            Console.WriteLine();
        }

    }

}
