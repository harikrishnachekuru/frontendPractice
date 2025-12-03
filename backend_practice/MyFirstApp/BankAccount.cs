public class BankAccount
{
    public string AccountHolderName { get; private set; }
    private int Balance;

    //constructor
    public BankAccount(string accountHolderName, int balance)
    {
        this.AccountHolderName = accountHolderName;
        this.Balance = balance;
    }

    //Method Creation
    public void Deposit(int amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Deposit amount must be greater than zero.");
            return;
        }

        Balance += amount;
        Console.WriteLine($"Deposited: {amount} And Available: {this.Balance}");
    }
    public void Withdraw(int amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Withdrawal amount must be greater than zero.");
            return;
        }

        if (amount > Balance)
        {
            Console.WriteLine("Insufficient balance.");
            return;
        }

        Balance -= amount;
        Console.WriteLine($"Withdrawn: {amount} And Available: {this.Balance}");
    }
    public void DisplayBalance()
    {
        if (this.Balance > 0)
        {
            Console.WriteLine($"Account Holder: {AccountHolderName}");
            Console.WriteLine($"Available Balance: {Balance}");
        }
    }
}