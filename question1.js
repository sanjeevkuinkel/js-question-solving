//!!Reverse a string without using .reverse().

let myString = "hello world";

let reversedString = "";
for(let i=myString.length-1;i>=0;i--)
{
	//console.log(myString.length);
	// let slicedCharacter=myString.slice(-11,0);
	// console.log(slicedCharacter);
	// let eachCharacter=myString[i-1];
	// eachCharacter=eachCharacter+myString[i];
	// console.log(eachCharacter);
	 reversedString += myString[i];
}
console.log(reversedString);