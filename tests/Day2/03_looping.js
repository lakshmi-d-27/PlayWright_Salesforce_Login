/**
 * looping: for loop, while loop and do while loop
 * 
 * for loop:
 * 
 * initilization, condition and incrementation
 * 
 * first it will check the initilized value, then it will check the condition, 
 * if the condition is true, it will print the value in the console then the value will get
 * incremented by 1, then initilize the value, check the condition a loop activity will
 * happen until the condition becomes false, when the condition becomes false it comes 
 * out from the loop: 
 * 
 * Syntax:
 * for (let i = 1; 1<=5; i++){
 * }
 * 
 */

/**
 * for (let i = 1; i <=5; i++) {
    
    console.log(i);
    
}

 * /*
* while loop: until the condition gets failed the exuection will be run wherein for loop
we know the no. of time execution but in while we are not aware of the no. of time exuection
instead a specified conditions gets failed

Syntax:
while (condition){
    when the condition is true code will get exected
}

*/
/**
 * let i = 5;
while (i>1) {
    console.log(i);
    i--;
    
}*/

/**
 * Do while - it will not check the condition first, it will run the code first
 * then it will check the condition, if the condition is true it will execute further
 * else it will come out from the loop
 * 
 * Syntax:
 * let i = 9;
 * 
 * do{
 * console.log(i);
 * i++
 * }
 * while(i<0)
 * 
 */
/*let i = 5;
do {
    console.log(i)

    
} while (i=5);
*/

/*let index = 0;
while (index=0) {
   console.log(index)
}*/

//logical operatos:
for (let index = 0; index <=10; index++) {
    if (index >5 && index%2===0) {
        console.log(index)
        
    }
    
}