// Exercise 1.
// Square the value of every element in the array. Presume that you will only get numbers in the input array.

const input = [1, 2, 3, 4, 5];

const mul = input.map ((curr)  => {
      return Math.pow( curr, 2)
});

console.log(mul)


// Exercise 2.
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const inputArr = [1, -4, 12, 0, -3, 29, -150];


const filteredInput = inputArr.filter(( item ) =>{
    if (item >= 0) 
    {return inputArr.concat(item)
    } else if (item === [] &&  item < 0) {
        return 0
    }

})

 function sumFilteredInput ( ){
  const sumFilter = filteredInput.reduce((accum, curr) => {
    return accum + curr
  } , 0)
    return sumFilter
 }

 
console.log(sumFilteredInput())


// or

const inp = [1, -4, 12, 0, -3, 29, -150];


const final = inp.reduce ((accum, curr) => {
   if( curr >= 0 ) {return  curr + accum}
   return accum
}, 0)

console.log(final)




//  Exercise 3.
// Calculate the mean and median values of the number elements from the input array.


const inputCal = [12, 46, 32, 64];

function calculateMean(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

function calculateMedian(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);
  if (sortedArray.length % 2 === 0) {
    const firstMiddleNumber = sortedArray[middleIndex - 1];
    const secondMiddleNumber = sortedArray[middleIndex];
    return (firstMiddleNumber + secondMiddleNumber) / 2;
  } else {
    return sortedArray[middleIndex];
  }
}

console.log(calculateMean(inputCal));
console.log(calculateMedian(inputCal));


// or


// // mean
const inputCalculate = [12, 46, 32, 64];

function calculateSecondMean(){
    const addMean =inputCalculate.reduce((accum, curr) => (accum + curr))
    const secondMean = addMean/inputCalculate.length
    return secondMean
} 
console.log(calculateSecondMean());

// // median

function calculateSecondMedian(a,b){
    const middleNum =inputCalculate.reduce((accum, curr) => (accum,curr))
    const addMiddle =  Math.abs(a + b)
    return addMiddle/2
} 
console.log(calculateSecondMedian(46,32));




// Exercise 4.
//The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

const inputGet = "George Raymond Richard Martin";

function getInitials(str) {
  return str
    .split(" ")
    .map(word => word[0])
    .join("");
}

const initials = getInitials(inputGet);
console.log(initials);






//  Exercise 5.
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const inputPer = [
      {
        name: "John",
        age: 13,
      },
      {
        name: "Mark",
        age: 56,
      },
      {
        name: "Rachel",
        age: 45,
      },
      {
        name: "Nate",
        age: 67,
      },
      {
        name: "Jennifer",
        age: 65,
      },
    ];
    
    const ages = inputPer.map((curr) => curr.age);
    
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const ageDifference = maxAge - minAge;
    
    const respectiveAgeResult = [minAge, maxAge, ageDifference];
    
    console.log(respectiveAgeResult);





// Exercise 6.
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, 
// l10n means localization. You get the Dev numeronyms by taking the first and the last letter 
// and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated,
// because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 
// letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const inputAbr = "Every developer likes to mix kubernetes and javascript";

function abbreviateWords(sentence) {          
  const words = sentence.split(" ");

  const abbreviatedWords = words.map((word) => {
    if (word.length >= 4) {
      const abbreviation = `${word[0]}${word.length - 2}${word[word.length - 1]}`;
      return abbreviation;
    }
    return word;
  });

  const abbreviatedSentence = abbreviatedWords.join("  ");
  return abbreviatedSentence;
}

const abbreviatedInput = abbreviateWords(inputAbr);
console.log(abbreviatedInput);




// Exercise 7
// If the given input is a number, you should return the factorial of 
// that number. The factorial of a natural number n is the product of 
// the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const inputFactorial = 6;

function factorial(num) {
    let factor = num - 1;
  if (num < 0){
        return -1;
  } else if (num == 0) {
      return 1;
  } else {
      return (num * factorial(factor));
  }
    return num;
}

console.log(factorial(inputFactorial));

// with for loop

function forLoopFactorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(forLoopFactorial(inputFactorial));

// reduce method

function reduceFactorial() {
    return [...Array(inputFactorial)].reduce((accum, val, initialValue) => accum * (initialValue + 1), 1);
}







// Exercise 8

// Count the occurrences of distinct elements in the given 2D array. The given input is 
// an array, the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.

const inputOccur = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];


  const countOccurrences = inputOccur.flat().reduce((accum, curr) => {
    accum[curr] = accum[curr] ? accum[curr] + 1: 1;
    return accum;
  }, {});
  

  console.log(countOccurrences);

  // foreach loop

  function countOccur(inputOccur) {
    const count = {};
    inputOccur.flat().forEach(item => {
      count[item] = count[item] ? count[item] + 1 : 1;
    });
    return count;
  }
  const countProps = countOccur(inputOccur);
  console.log(countProps);





// Exercise 9
// If the given input is a number, you should return the factorial of that number. 
// The factorial of a natural number n is the product of the positive integers less 
// than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];

const highScorers = students
  .map(student => {
    const averageScore = student.scores.reduce((acc, curr) => acc + curr, 0) / student.scores.length;
    return { name: student.name, averageScore: averageScore };
  })
  .filter(student => student.averageScore > 90);

console.log(highScorers);




//Exercise 10
// You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, 
// filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only
// the categories that have an average price above 50.


const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

// Step 1: Calculate the average price of products in each category
const categoryAvgPrices = products.reduce((accumulator, product) => {
  if (!accumulator[product.category]) {
    accumulator[product.category] = {
      total: 0,
      count: 0,
    };
  }
  accumulator[product.category].total += product.price;
  accumulator[product.category].count++;
  return accumulator;
}, {});

Object.keys(categoryAvgPrices).forEach((category) => {
  categoryAvgPrices[category].average =
    categoryAvgPrices[category].total / categoryAvgPrices[category].count;
});

// Step 2: Filter out categories with average price above 50
const filteredCategories = Object.keys(categoryAvgPrices).filter(
  (category) => categoryAvgPrices[category].average > 50
);

// Step 3: Create an array of objects containing the filtered categories
const filteredArrResult = filteredCategories.map((category) => ({
  category,
  averagePrice: categoryAvgPrices[category].average,
}));

console.log(filteredArrResult);


// Exercise 11
// You are given an array of objects representing a collection of employees,
// each with a name, salary, and department. Your task is to use map, filter, 
// and reduce to calculate the average salary for each department and then return an array of objects 
// containing only the departments that have an average salary above 65000.

const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

// Step 1: Calculate the total salary and count of employees in each department
const departmentAvgSalaries = employees.reduce((accumulator, employee) => {
  if (!accumulator[employee.department]) {
    accumulator[employee.department] = {
      totalSalary: 0,
      employeeCount: 0,
    };
  }
  accumulator[employee.department].totalSalary += employee.salary;
  accumulator[employee.department].employeeCount++;
  return accumulator;
}, {});

// Step 2: Calculate the average salary for each department
Object.keys(departmentAvgSalaries).forEach((department) => {
  departmentAvgSalaries[department].averageSalary =
    departmentAvgSalaries[department].totalSalary /
    departmentAvgSalaries[department].employeeCount;
});

// Step 3: Filter out departments with average salary above 65000
const filteredDepartments = Object.keys(departmentAvgSalaries).filter(
  (department) => departmentAvgSalaries[department].averageSalary > 65000
);

// Step 4: Create an array of objects containing the filtered departments
const filteredResult = filteredDepartments.map((department) => ({
  department,
  averageSalary: departmentAvgSalaries[department].averageSalary,
}));

console.log(filteredResult);

console.log(reduceFactorial(inputFactorial));











// FREE CODE CAMP

// FreeCodeCamp 1

  // write a function for a palindrome checker, the checker will 
  // return true if the given string is a palindrome. Otherwise, return false.
  //all non-alphanumeric characters (punctuation, spaces and symbols) and turn 
  // everything into the same case (lower or upper case) will need to be removed in order to check for palindromes.

  function palindrome(str) {
    const replaceStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = replaceStr.split('').reverse().join('');
      if (reversedStr !== replaceStr) {
          return false;
      } 
      return true
  }

  console.log(palindrome("eye"))




// FreeCodeCamp 2

// Convert the given number into a roman numeral.
// { value: 1000, symbol: 'M' },
//{ value: 900, symbol: 'CM' }, { value: 500, symbol: 'D' },{ value: 400, symbol: 'CD' },
// { value: 100, symbol: 'C' },
// { value: 90, symbol: 'XC' },
// { value: 50, symbol: 'L' },
// { value: 40, symbol: 'XL' },
// { value: 10, symbol: 'X' },
// { value: 9, symbol: 'IX' },
// { value: 5, symbol: 'V' },
// { value: 4, symbol: 'IV' },
// { value: 1, symbol: 'I' }


  function convertToRoman(num) {
    const romanNumeral = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
    
    let finalResult = '';
    
    for (let i = 0; i < romanNumeral.length; i++) {
      while (num >= romanNumeral[i].value) {
        finalResult += romanNumeral[i].symbol;
        num -= romanNumeral[i].value;
      }
    }
  
   return finalResult;
  }
  
  console.log(convertToRoman(36));


// freecodecamp 3
//caeser cipher

function rot13(encodedString) {
  let decodedString = "";
  for (let i = 0; i < encodedString.length; i++) {
    const char = encodedString[i];
    if (char.match(/[A-Z]/)) {
      const asciiOffset = "A".charCodeAt();
      const decodedChar = String.fromCharCode(
        ((char.charCodeAt() - asciiOffset + 13) % 26) + asciiOffset
      );
      decodedString += decodedChar;
    } else {
      decodedString += char;
    }
  }
  return decodedString;
}
console.log(rot13("SERR PBQR PNZC")); 
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?")); 
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));



// 4) freecode camp
// telephone number validator

function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // Output: true
console.log(telephoneCheck("1 555-555-5555")); // Output: true
console.log(telephoneCheck("1 (555) 555-5555")); // Output: true
console.log(telephoneCheck("5555555555")); // Output: true
console.log(telephoneCheck("(555)555-5555")); // Output: true
console.log(telephoneCheck("1(555)555-5555")); // Output: true
console.log(telephoneCheck("555-5555")); // Output: false
console.log(telephoneCheck("5555555")); // Output: false
console.log(telephoneCheck("1 555)555-5555")); // Output: false
console.log(telephoneCheck("1 555 555 5555")); // Output: true
console.log(telephoneCheck("1 456 789 4444")); // Output: true
console.log(telephoneCheck("123**&!!asdf#")); // Output: false
console.log(telephoneCheck("55555555")); // Output: false
console.log(telephoneCheck("(6054756961)")); // Output: false
console.log(telephoneCheck("2 (757) 622-7382")); // Output: false
console.log(telephoneCheck("0 (757) 622-7382")); // Output: false
console.log(telephoneCheck("-1 (757) 622-7382")); // Output: false
console.log(telephoneCheck("2 757 622-7382")); // Output: false
console.log(telephoneCheck("10 (757) 622-7382")); // Output: false
console.log(telephoneCheck("27576227382")); // Output: false
console.log(telephoneCheck("(275)76227382")); // Output: false
console.log(telephoneCheck("2(757)6227382")); // Output: false
console.log(telephoneCheck("2(757)622-7382")); // Output: false
console.log(telephoneCheck("555)-555-5555")); // Output: false
console.log(telephoneCheck("(555-555-5555")); // Output: false
console.log(telephoneCheck("(555)5(55?)-5555")); // Output: false
console.log(telephoneCheck("55 55-55-555-5")); // Output: false
console.log(telephoneCheck("11 555-555-5555")); // Output: false



// freecodecamp 5
// cash register


function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let totalCID = 0;
  for (let [currency, amount] of cid) {
    totalCID += amount;
  }

  let changeDue = cash - price;

  if (changeDue > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue === totalCID) {
    return { status: "CLOSED", change: cid };
  }

  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const currency = cid[i][0];
    const value = currencyValues[currency];
    let amount = 0;

    while (changeDue >= value && cid[i][1] > 0) {
      amount += value;
      changeDue -= value;
      cid[i][1] -= value;
      changeDue = Math.round(changeDue * 100) / 100; // Fix floating-point precision issue
    }

    if (amount > 0) {
      change.push([currency, amount]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
