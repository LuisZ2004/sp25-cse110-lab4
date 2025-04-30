1. 20 is printed
2. 20 is printed
3. var can be accessed by anything in the function so if you declare something using var in an if statement, that var can still be accessed outside the if statement as long as it is in the same function. Therefore you can accidentally redeclare var in places you might not want to and thus let is more secure in this aspect as it will not let you redeclare it.
4. prints 20
5. let is declared inside the if statement therefore it is out of scope of the else stament and it returns an error
6. Error is thrown because you cannot redeclare a const variable thus, line 9 is never reached
7. Error is thrown because you cannot redeclare a const variable thus, line 13 is never reached
