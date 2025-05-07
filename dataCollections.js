let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let rowArray=[];
//let cells="";
//let tables=[];
console.log("\nData collections part 1\n"+"=================================")
for (let i=0;i<=csv.length;i++){
    if(csv[i]===","){
        rowArray += " "
    }
    else if (csv.charAt(i) === '\n' || i === csv.length - 1){
        console.log(rowArray);
        rowArray="";
    }
    else{
        rowArray += csv[i];
    }
}

/*
Part 2: Expanding Functionality

Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
*/
let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 

	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}
console.log("\n Data collections part 2\n"+"=================================")
console.log(table)

/*
Part 3: Transforming Data

While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.
Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
*/
const arrayPart3=[];
let count=0

for (let i = 0; i < table.length-1; i++) {
    arrayPart3.push({ id: table[i+1][count], name:table[i+1][count+1],occupation:table[i+1][count+2],age:table[i+1][count+3]});
    
    //console.log(arrayPart3[i])
    
}
console.log("\n Data collections part 3\n"+"=================================")
console.log(arrayPart3)
/*
Part 4: Sorting and Manipulating Data

It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
*/
console.log("\n Data collections part 4\n"+"=================================")

const arrayPart4= arrayPart3.slice();
arrayPart4.pop();
//arrayPart4.shift();
//console.log(arrayPart4);
addedObject={ id: "48", name: "Barry", occupation: "Runner", age: "25" };
addedObject2={ id: "7", name: "Bilbo", occupation: "None", age: "111" }
arrayPart4.unshift(addedObject);
arrayPart4.push(addedObject2);
console.log(arrayPart4);