// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

using System;
using MyProject;
using System.Collections.Generic;

class Program
{
    public static void Main()
    {
        //Console.WriteLine("Enter Your Name: ");
        //string name = Console.ReadLine();
        //Console.WriteLine("Enter your age");
        //int age = Convert.ToInt32(Console.ReadLine());
        

        //if( age >= 12  && age < 19)
        //{
        //    Console.WriteLine("He started his youth");
        //}
        //else
        //{
        //    Console.WriteLine("He yet to reach that stage");
        //}

        //bool isLearning =true;

        //Console.WriteLine("Welcome " + name +"! you are " + age + " years old and learning C#");

        //Console.WriteLine("Enter the number for Multiplication");
        //int num =Convert.ToInt32(Console.ReadLine());

        //for (int i = 1; i <= 10; i++)
        //{
        //    int multi = num * i;
        //    Console.WriteLine($"{num} * {i} = {multi}");
        //    //Console.WriteLine( num + " * " + i + " = " + result);
        //}


        //// Creating Math Operations in separate file and having it using in this program.cs file

        //Console.Write("Enter first number: ");
        //int a = Convert.ToInt32(Console.ReadLine());

        //Console.Write("Enter second number: ");
        //int b = Convert.ToInt32(Console.ReadLine());

        //Console.WriteLine("\nChoose Operation:");
        //Console.WriteLine("1 - Add");
        //Console.WriteLine("2 - Subtract");
        //Console.WriteLine("3 - Multiply");
        //Console.WriteLine("4 - Divide");

        //Console.Write("Enter your choice: ");
        //int choice = Convert.ToInt32(Console.ReadLine());

        //int result = 0;

        //switch (choice)
        //{
        //    case 1:
        //        result = MathOperations.Add(a, b);
        //        break;
        //    case 2:
        //        result = MathOperations.Sub(a, b);
        //        break;
        //    case 3:
        //        result = MathOperations.Mul(a, b);
        //        break;
        //    case 4:
        //        result = MathOperations.Div(a, b);
        //        break;
        //    default:
        //        Console.WriteLine("Invalid choice");
        //        return;
        //}

        //Console.WriteLine($"\nResult = {result}");


        //var students = new List<string> { "Krish", "Bhagya" };
        //students.Add("Hari");

        //foreach (var student in students) { 
        //    Console.WriteLine(student);
        //}

        //Console.WriteLine(students.Count);

        Student s1 = new Student("Test", 23,82);

        s1.Display();

        BankAccount b1 = new BankAccount("Hari", 25);

        b1.Deposit(12);
        b1.Withdraw(5);
        b1.DisplayBalance();
    }
}
