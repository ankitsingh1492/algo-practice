/** Reduce practice */


//sum of values in an array

let total = [ 0, 1, 2, 3 ].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue
  )

  //both the initial and without initial values result is sameS
  //console.log(total)

  //sum of values in an object

  let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)

console.log(sum) // logs 6

//without initial value

let sum2 = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
})

console.log(sum2) // logs [object Object]23
/** Reason for logging - [object Object]23
 * 
 * Since if we do not pass the initial value 
 * The first time the callback is called, accumulator and currentValue 
 * can be one of two values. If initialValue is provided in the call to
 *  reduce(), then accumulator will be equal to initialValue, and 
 * currentValue will be equal to the first value in the array. If no
 *  initialValue is provided, then accumulator will be equal to the first
 *  value in the array, and currentValue will be equal to the second.

Note: If initialValue is not provided, reduce() will execute the callback
 function starting at index 1, skipping the first index. If initialValue
  is provided, it will start at index 0.

If the array is empty and no initialValue is provided, TypeError will be
 thrown.

If the array only has one element (regardless of position) and no
initialValue is provided, or if initialValue is provided but the array
is empty, the solo value will be returned without calling callback.

It is almost always safer to provide an initialValue,
  */

  //Q - Flatten an array of arrays

  let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( accumulator, currentValue ) => accumulator.concat(currentValue),
    []
  )

  console.log(flattened)
  /**
   * initially 
   * acc = [] cv - [0,1] 
   * acc = [0,1] cv - [2,3]
   * acc = [0,1,2,3] cv- [4,5]
   * [0,1,2,3,4,5]
   */

   //Q - Counting instances of values in an object

   
   let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

   let countedNames = names.reduce(function (allNames, name) {
     if (name in allNames) {
       allNames[name]++
     }
     else {
       allNames[name] = 1
     }
     return allNames
    },{})

    // console.log(countedNames)

    // Q - grouping objects by a property

    let people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ];
      
      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          let key = obj[property]
          if (!acc[key]) {
            acc[key] = []
          }
          acc[key].push(obj)
          return acc
        }, {})
      }
      
      let groupedPeople = groupBy(people, 'age')
      
/** Q - Bonding arrays contained in an array of objects
 *  using the spread operator and initialValue
 */

 // friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(accumulator, currentValue) {
    return [...accumulator, ...currentValue.books]
  }, ['Alphabet'])
  
  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]

  /** Q - Remove duplicate items in an array
 */

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

//screating a array for accumulator
console.log(myOrderedArray)

// let orderedArray = Array.from(new Set(myArray))

/** Q - Replace filter().map() with .reduce()
 * 
 */

const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    accumulator.push(doubled);
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

/** 
 * 
 */

//Running Promises in Sequence 
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

//here - promiseChain - accumulator and currentFunction is current value
// initial acc - promise.resolve(input)

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200


  /**
   * Q - Write map using Reduce
   * 
   */

  if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, thisArg) {
      return this.reduce(function(mappedArray, currentValue, index, array) {
        mappedArray[index] = callback.call(thisArg, currentValue, index, array)
        return mappedArray
      }, [])
    }
  }
  
  [1, 2, , 3].mapUsingReduce(
    (currentValue, index, array) => currentValue + index + array.length
  ) // [5, 7, , 10]
  


function firstNonRepeatingLetter(s) {
  
    let hash = {}
    
    for(let i =0 ; i < s.length ; i++){
        let char = s.charAt(i).toLowerCase();
        if(hash[char]){
            hash[char] += 1
        }else{
            hash[char] = 1
        }
    }
    console.log(hash)

    for (const [key, value] of Object.entries(hash)) {
        if(value === 1) {
            return key
        }
    }

    return ''
  }

  console.log(firstNonRepeatingLetter("sTreSS"))

  const getFirstUniqueLetter = (string) => {
    string = [...string];
  
    const {
      map,
      unique
    } = string.reduce((result, character , index) => {
        console.log(index , result, character)
        result.map[character.toLowerCase()] = (result.map[character.toLowerCase()] || 0) + 1;
  
        if(!result.unique.includes(character)){
          result.unique.push(character);
        }
        console.log({result})
        return result;
      }, {
        map: {},
        unique: []
      });

     
  
    // You can add the `|| ""` in the next line to get a default output of the empty string, if no character is unique. Otherwise, `undefined` is returned.
    return unique.find((character) => map[character.toLowerCase()] === 1) /* || "" */;
  };

  console.log(getFirstUniqueLetter("sTreSS"))
