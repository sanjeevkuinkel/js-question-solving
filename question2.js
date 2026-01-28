//!Check if a number is a palindrome.

let palindromeNumber=54321;
let str=palindromeNumber.toString();
// console.log(str);
// console.log(typeof str);
let reversedString="";
let reversedNumber=0;
for(let i=str.length-1;i>=0;i--){
	reversedString+=str[i];

}
reversedNumber=Number(reversedString);
	console.log(typeof reversedNumber)
if(reversedNumber===palindromeNumber)
	{
		console.log(`Given number is palindrome Number ${palindromeNumber}`);
	}
else{
		console.log(`Given Number is not palindrome Number,${palindromeNumber}`);
	}
// for(let i=palindromeNumber.length-1;i>=0;i--){
// 	let reversedNumber+=palindromeNumber[i];
// 	if(reversedNumber==palindromeNumber){
// 		console.log(`Given number is palindromeNumber ${palindromeNumber}`);
// 	}
// 	else {
// 		console.log(`Given Number is not palindromeNumber,${palindromeNumber}`);
// 	}
// }



	let num = 12321;
let original = num;//1
let reversed = 0;//1363

while (num > 0) {
  let digit = num % 10;//1
  reversed = reversed * 10 + digit;//1363
  num = Math.floor(num / 10);//1
}

if (original === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
