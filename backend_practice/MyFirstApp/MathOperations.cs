namespace MyProject
{
    public static class MathOperations
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
        public static int Sub(int a, int b)
        {
            return (a - b);
        }
        public static int Mul(int a, int b)
        {
            return (a * b);
        }
        public static int Div(int a, int b)
        {
            if (b == 0)
            {
                Console.WriteLine("Division by zero is not allowed.");
                return 0;
            }
            return (a / b);
        }
    }
}