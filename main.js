const orderedString = (str) => str.split('').sort().join('');
console.log(orderedString('webmaster'));

//js program that takes a string as a parameter and counts the number of vowels in it 
let vowels =['a','e','i','o','u']
const countVowels = (str) =>  str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
console.log(countVowels("helloOI"));

//extract unique characters from a string 
const uniqueChar = (str) => [... new Set(str.split(''))];

console.log(uniqueChar('aaaaabbbbccde'))

//function to find the first not repeated character 
const notRepeatedChar = (str) =>{
let arr=str.split('')
.filter(char => str.indexOf(char,str.indexOf(char)+1)== -1).join('');
return arr[0];}
    
console.log(notRepeatedChar('aabbcdeff'));

//get the character from ascii value

const getChar = (value) => String.fromCharCode(value);
console.log(getChar(65));

//kata seatsIntheater problem
const seatsInTheater=(nCols,nRows,col,row) =>{
    let ncol=nCols-col+1;
    let nrow=nRows-row;
    return ncol*nrow;
}
console.log(seatsInTheater(16,11,5,3))

//Total amount of points 
const points = (games) =>{
    let total=0;
   for(let i=0 ; i<games.length;i++){
    let x= games[i].slice(0,1);
    let y=games[i].slice(2);
    if(Number(x)>Number(y)) total+=3
    else if(Number(x)==Number(y)) total+=1
    else continue
   
   }
   return total;
}
let games=["3:1","2:2","0:1","2,1"]
console.log(points(games));

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?
const AverageIncome = (arr) =>{
    let buffer =Number(arr[0].salary);
    for(let i=1;i<arr.length;i++)
        buffer+=Number(arr[i].salary);
    let total = buffer/arr.length;
    return total;
}
console.log(AverageIncome(people))

// 2) Who are the people that are currently older than 30?
const olderThan30 =(arr) =>{
    let array=[];
    let currentYear = new Date().getFullYear();
    for(let i=0;i<arr.length;i++){
        if(currentYear-Number(arr[i].DOB.slice(6)>=30))
         array.push(arr[i])   ;
    }
    return array
}
console.log(olderThan30(people));

// 3) Get a list of the people's full name (firstName and lastName).
const fullName = (arr) =>{
    for(let i=0;i<arr.length;i++)
        console.log(arr[i].firstName+' '+arr[i].lastName+'\n');
}
fullName(people);

// 4) Get a list of people in the array ordered from youngest to oldest.
 

// 5) How many people are there in each department?
const dep = (arr) =>{
    for(let i=0 ;i<arr.length;i++){

    }
}
//FizzBuzz
for(let i=1 ;i<101;i++){
    if(i%3==0 && i%5 !==0) console.log("Fizz")
        else if(i%3!==0 && i%5 ==0) console.log("buzz")
    else if(i%3==0 && i%5 ==0) console.log("FizzBuzz")
else console.log(i)
}