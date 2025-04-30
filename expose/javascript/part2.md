1. 3 is printed since there are 3 elements in the prices array, the loop iterated 3 times and once the loop was over, i was printed
2. 150 is printed, this is the value of the discounted price of the last element in the array
3. 150 is printed, this is the value of the discounted price of the last element in the array, this is the same as the one in the previous qestion since discounted price is multiplied then divided by 100 to calculate the final price.
4. It returns an array of new prices, the discount being applied to each element in the input array.
5. i is now let, therefore it is out of scope for the console.log() since it is not in the for loop, therefore there is an error
6. Similarly discountedPrice is now out of scope and thus an error is thrown
7. 150 is printed, finalprice was declared outside the for loop and thus is in scope for the console.log call
8. The function still returns an array of prices, they now have the discounts applied to them
9. i is still out of scope for the console.log which would cause an error however, there is another error before this when trying to reassign finalPrice, since it is const it cannot be reassigned and an error is thrown.
10. 3, the length of the array is printed
11. The function still returns an array of prices, they now have the discounts applied to them

12. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. 
    A. '32'. The character 3 is being concatenated with 2
    B. 1 : 3 is being converted from a string to a number because of the subtraction
    C. 3 : adding nothing to the number 3
    D. 3null : concatenating 3 with the string null because w is a s
    E. 4 : true has a value of 1 so this is the same as 3 + 1
    F. 0 : false is 0 and you are adding nothing to it
    G. '3undefined' : string 3 concatenated with the string undefined
    H. NaN : string 3 minus undefined has no output, the js doesnt know what to do with this

14. 
    A. true : javascript is converting 2 into a number and comparing it with 1
    B. false : javascript is comparing the first two characters of the strings so 2 > 1
    C. true : '2' is being converted into a number
    D. false : strict equality and they are not the same type
    E. false : true = 1, so although it is converting true to a number, 1 does not equal 2
    F. true : converting 2 into a boolean rather than the boolean into a number, since 2 is non-zero it is true.

15. == is loose equality and can change the type of the variable it is comparing. As shown above it can change the string 2 into the number 2. === on the other hand does not do type conversion and only does strict equality.
16. Code
17. The modified array is [2,4,6]. Each element in the array is modified using the callback function. A callback funtion is called on array[i], in this case the function doSomething multiplies the number by 2. So each element in the input array will be multiplied by 2.
18. code
19. The output is 1 4 3 2, 1 is the first statement, then 2 and 3's print statements are paused, then 4 is printed before 3 then, since 3's interval was 0 ms, 3 gets printed then finally 2.