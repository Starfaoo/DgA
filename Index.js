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

const input = [1, -4, 12, 0, -3, 29, -150];


const final = input.reduce ((accum, curr) => {
   if( curr >= 0 ) {return  curr + accum}
   return accum
}, 0)

console.log(final)




//  Exercise 3.
// Calculate the mean and median values of the number elements from the input array.
3)

const input = [12, 46, 32, 64];

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

console.log(calculateMean(input));
console.log(calculateMedian(input));


// or


// mean
const input = [12, 46, 32, 64];

function calculateMean(){
    const sum =input.reduce((accum, curr) => (accum + curr))
    const mean = sum/input.length
    return mean
} 
console.log(calculateMean());

// median

function calculateMedian(a,b){
    const middleNum =input.reduce((accum, curr) => (accum,curr))
    const addMiddle =  Math.abs(a + b)
    return addMiddle/2
} 
console.log(calculateMedian(46,32));




// Exercise 4.
//The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

const input = "George Raymond Richard Martin";

function getInitials(str) {
  return str
    .split(" ")
    .map(word => word[0])
    .join("");
}

const initials = getInitials(input);
console.log(initials);






//  Exercise 5.
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const input = [
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
    
    const ages = input.map((curr) => curr.age);
    
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const ageDifference = maxAge - minAge;
    
    const result = [minAge, maxAge, ageDifference];
    
    console.log(result);





// Exercise 6.
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, 
// l10n means localization. You get the Dev numeronyms by taking the first and the last letter 
// and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated,
// because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 
// letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input = "Every developer likes to mix kubernetes and javascript";

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

const abbreviatedInput = abbreviateWords(input);
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

console.log(reduceFactorial(inputFactorial));





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
