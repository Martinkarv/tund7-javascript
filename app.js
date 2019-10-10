document.addEventListener("DOMContentLoaded", function()
{
    
let hello = "Hello World";
console.log(hello);

/*let rangeStart = 1;
let rangeEnd = 100;
let numberToCheck = 8;
let inRange = false;
for(let i = rangeStart; i <= rangeEnd; i++ )
{
if(numberToCheck === i) 
{
    inRange = true;
    break;
}

}*/
/*
if(inRange === true)
{
console.log("The number is in range.");
}
else
{
    console.log("The number is out of range.");
}
*/

//let result = inRange ? "In Range" : "Out of Range";
//console.log(result);


//Korrutustabel-Kirjuta programm antud numbrile
//Test data
//Expected Output
//5 x 1 = 5;
//5 x 2 = 10;
//...


/*let number = 5;

for(let i = 1; i <= 10; i++)
{
let string = `${number} X ${i} = ${number * i}`;
console.log(string);

  //  console.log(number, " X ", i, " = ", number*i);

}
*/


/*let stringLength;
string str;
//let string = "Hello World"
stringLength = string.length;
console.log(stringLength);

/*for(let i = 0; i < 11; i++)
{
    console.log(string[i]);
}*/

/*for(let i = string.length-1; i>= 0; i--)
{
    console.log(string[i]);

String str = "Hello World";
Console.WriteLine("Original string: \"{0}\"", str);
Console.WriteLine("CSV string:      \"{0}\"", str.Replace('o', '*'));
}*/



for(let i = 0; i < 11; i++)
{
    if(string[i] === 'o');
   {

   string[i] = '*';
   }
   
   
}
console.log(string);

let substitute = string.substitute('o', '*');
console.log(substitute)

});
