Stage 5/5: Expect the unexpected
Description
We made our program run continuously, but there is a problem, as you cannot handle any unexpected inputs! The visitor could enter a different number than you provide, or they could enter a character instead of a number. Now, we will handle these cases.

For the initial input, where you ask the visitors what to do, if the visitor enters anything unexpected, output Please enter a valid number!

For the first option, where the visitor chooses to buy a gift, handle these cases;

If there're no gifts left to buy, output: Wow! There are no gifts to buy.

If there are non-numeric characters in the input: Please enter a valid number!

If there are no gifts with that number. Output this message: There is no gift with that number!

If the visitor doesn’t have enough tickets to buy a gift: You don't have enough tickets to buy this gift.

For the second option, where the visitor enters the number of tickets they want to add, handle these cases:

if they enter a non-numeric value.
the number they enter should be between 0 and 1000 (both inclusive).
Output this message if any of these cases happen: Please enter a valid number between 0 and 1000.

For the last option, where you show the list of gifts, if there are no gifts left to offer, output this message again:Wow! There are no gifts to buy.

Following the previous stage, the program will run until the exit prompt is entered.

You can use the isNaN built-in method to check if an input is a number.

Objectives
In this stage, your program should:

Print the welcoming and greeting messages from the previous stage;
Print the list of gifts;
Handle the initial input where the user chooses what to do and handle any unexpected inputs;
Handle the option to buy a gift and handle all of the cases mentioned above;
Handle the option to add more tickets to the total tickets and handle all of the cases mentioned above;
Handle the option to see the total tickets;
Handle the option to see the list of gifts and handle all of the cases mentioned above;
Handle the option to quit the program;
Run continuously;
Terminate the program the message.
Examples
The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

Example 1: where the program handles an unexpected input at the initial stage

WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 6
Please enter a valid number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0

Example 2: where the program takes a random input at the first option

WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > 100
Total tickets: 100

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Enter the number of the gift you want to get: > a
Please enter a valid number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0

Example 3: where the program addresses if the user enters the wrong id at the first option

WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > 100
Total tickets: 100

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Enter the number of the gift you want to get: > 0
There is no gift with that number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0

Example 4: where the program addresses if the user has insufficient tickets at the first option

WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Enter the number of the gift you want to get: > 1
You don't have enough tickets to buy this gift.
Total tickets: 0

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0

Example 5: where the program addresses if there are no gifts left at the first option

...
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Wow! There are no gifts to buy.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
>

Example 6: where the program takes an unexpected input at the second option

WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > a
Please enter a valid number between 0 and 1000.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
Example 7: where the program takes unexpected information at the second option

WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > 1001
Please enter a valid number between 0 and 1000.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0

Example 8: where the program addresses if there are no gifts left at the fourth option

...
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 4
Here's the list of gifts:

Wow! There are no gifts to buy.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0