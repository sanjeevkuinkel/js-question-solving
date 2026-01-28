//Remove duplicates from an array without using Set.
let duplicateArrayData=[1,2,3,4,3,6];
let intialnumber=0;
let newArray=[];
for( let num of duplicateArrayData)
{
	if (!newArray.includes(num)) {
    newArray.push(num);
  
}

	}
	console.log(newArray);