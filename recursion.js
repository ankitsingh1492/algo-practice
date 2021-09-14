let a = [1,3,4,4,5, 4 ,34,44,2,4]

firstI = (arr , si, data) => {
	
  if (si > arr.length){
  	return -1
  }
  
  if(arr[si] === data) {
  	return si
  }else{
  	let index = firstI(arr , si + 1 , data)
    return index
  }

}

lastI = (arr , si, data) => {
	
  if (si > arr.length){
  	return -1
  }
  
  let index = lastI(arr , si + 1 , data)
  	if (index === -1){
    	if(arr[si] === data) {
      return si
      }else{
      	return -1
      }
    }else{
    return index
    }

}

isSorted = (arr , si) => {
  if (si === arr.length -1){
  	return true
  }
  if(arr[si] <= arr[si+1]){
    let index  = isSorted (arr , si + 1) 
		return index
  }else{
    return false
  }  	
}

allI = (arr , si , data) => {
	
  if (si > arr.length) {
  	 return []
  }
  
  let index = allI(arr , si+1 , data)
  if(index){
  	if(arr[si] === data) {
    	index.push(si)
        return index
    }else{
    return index
    }
  }
  
}

//console.log(allI(a , 0 , 4 ))

//pattern printing 

pattern = (no , row, col) => {
//    for (let index = 1; index <= no; index++) {
//        let output = ''
//        for (let k = 0; k < index; k++) {     
//          output += '*'
//        }
//        console.log(output)
//    }

//recursive
if(row > no) {
    return
}
if (col > row) {
    console.log()
    pattern(no , row + 1 , 1)
    return;
}

process.stdout.write('*') // use this to enter everything in the same line
pattern(no , row , col+1)
   
}

//pattern(5 , 1, 1)

//bubble sort
const bubbleSort = function (array, pointer = array.length - 1) {
    // Base Case
    if (pointer === 0) {
      return array;
    }
  
    for (let i = 0; i < pointer; i++) {
      if (array[i] > array[i + 1]) {
        [a[i], a[i+1]] = [a[i+1], a[i]] 
      }
    }   
    // Recursive call on smaller portion of the array
    return bubbleSort(array, pointer - 1);  
  };
// bubbleSort = (arr , si  , li) => {
//     if(li === 0) {
//         return
//     }
//     if(si === li) {
//         bubbleSort(arr, 0 , li-1)
//     }

//     if(arr[si] > arr[si + 1]){
//         [arr[si] , arr[si+1]] = [arr[si+1] , arr[si]]
//     }
//     bubbleSort(arr, si+1 , li)
// }

// bubbleSort(a)
// console.log(a)


//subsequence 

// theorry - For any str subsequence = 2^n , abc = 2^3 
// order matters 
// ab = "", b , a , ab

getSubSeq = (str) => {
    if(str.length === 0) {
        return [""]
    }
    let cc = str.charAt(0) //current character
    //let cc = str.charCodeAt(0) //current charCodeAt(0) character
    let ros = str.substr(1) // rest of string
    console.log(cc , ros)
    let result = getSubSeq(ros)
    let myResult = []
    for (let index = 0; index < result.length; index++) {
       myResult.push(result[index])
       myResult.push(cc+result[index])
      // myResult.push(cc.charCodeAt(0)+result[index].charCodeAt(0))
        
    }
    return myResult
} 

//console.log(getSubSeq("ab"))

/** 
 * Recursion calls for subsequence
 * 
 * abc = a , bc return ["" , a ,b, ab, c , ac , bc , abc ]
 * bc = b , c return ["" , b , c , bc]
 * c = c , "" return [ "" , c]
 * "" = base case return [""] 
 */

 //permutation

 /**
  * n -> n! 
  * bigger problem  -> abc
  * smaller p -> bc -> [bc , cb]
  * bc - _bc - abc
  *     b_c - bac
  *     bc_ - bca
  * 
  * cb - _cb - acb
  *     c_b - cab
  *     cb_ - cba
  */

 perm = (str) => {
     if(str.length === 0) {
         return [""]
     }
    let cc = str.charAt(0)
    let ros = str.substr(1)
    console.log(cc , str)
    let result = perm(ros) //RECURSION RESULT
    let myResult = []
    for (let index = 0; index < result.length; index++) {
        let element = result[index]
        for(let i =0 ; i<= element.length ; i++){
            let x = element.substr(0,i) + cc + element.substr(i)
            /**
             * insert - str.substr(0,i) + ch + str.substr(i)
             * remove - str.substr(0,i) + str.substr(i+1)
             * replace - str.substr(0,i) + ch + str.substr(i + 1)
             */
            myResult.push(x)
        }
        
    }
    return myResult
 }

//  console.log(perm("abc"))

 //get permutation recursion result

 /**
  * "" -> [""]
  * c c -> [c]
  * b bc -> [_c , c_] -> [ bc , cb]
  * a abc -> [ _bc ,b_c ,bc_ , _cb , c_b , cb_]
  */

/**BOARD PATH *****************************************************************
   * 
   * POSITIVE CASE -> LAST CASE RETURN [""]
   * NEGATIVE CASE -> RETURN EMPTY ARR
*/

getBoardPath = (curr , end) => {
    if(curr === end) {
        return [""]
    }
    if(curr > end) {
        return []
    }
    let myResult = []
    for (let dice = 1; dice <= 6; dice++) {
      let result = getBoardPath(curr + dice , end)

      for (let index = 0; index < result.length; index++) {
          const element = result[index];
          myResult.push(dice + element)
      }
    }
    return myResult
}

// console.log(getBoardPath(5 , 10))

/** maze path
 * 
 * grid 3x3 
 * move 0,0 to 2,2
 * steps - 1 H step
 *          1 V step
 * 
 * POSITIVE CASE -> LAST CASE RETURN [""]
 * NEGATIVE CASE -> RETURN EMPTY ARR
 */
//current row, col , end row, col
 getMazePath = (cr , cc , er, ec) => {

    if(cr === er && cc === ec) {
        return [""]
    }

    if (cr > er || cc > ec) {
        return []
    }

    let myResult = []
    let rrh = getMazePath(cr , cc + 1 , er , ec)
    for (let index = 0; index < rrh.length; index++) {
        myResult.push("h" + rrh[index])
    }

    let rrv = getMazePath(cr + 1 , cc , er , ec)
    for (let index = 0; index < rrv.length; index++) {
        myResult.push("V" + rrv[index])
    }

    return myResult

 } 

 //console.log(getMazePath(0,0,2,2))

 getMazePathDiagonal  = (cr , cc , er, ec) => {

    if(cr === er && cc === ec) {
        return [""]
    }

    if (cr > er || cc > ec) {
        return []
    }

    let myResult = []
    let rrh = getMazePathDiagonal(cr , cc + 1 , er , ec)
    for (let index = 0; index < rrh.length; index++) {
        myResult.push("h" + rrh[index])
    }

    let rrv = getMazePathDiagonal(cr + 1 , cc , er , ec)
    for (let index = 0; index < rrv.length; index++) {
        myResult.push("V" + rrv[index])
    }

    let rrd = getMazePathDiagonal(cr + 1 , cc + 1 , er , ec)
    for (let index = 0; index < rrd.length; index++) {
        myResult.push("D" + rrd[index])
    }


    return myResult

 } 

 
 console.log(getMazePathDiagonal(0,0,2,2))


 //subsection till get maze is based on storing all answers in array.

 /** 
  * 
  * This section will solve the above questions in a different approach
  * 
  * this is an easier print version 
  * uses less space
  */

  printSubSeq = ( str , res) => {
      if(str.length === 0) {
          console.log(res) 
          return;
      }
      let cc = str.charAt(0)
      let ros = str.substr(1)
      printSubSeq(ros , res)
      printSubSeq(ros , res + cc)
  }

  //printSubSeq("abc" , "")

/**
 * 
 * Print permutation 
 * ques , ans 
 * abc      ""
 * if a is part of ans remove a from question
 * 
 * abc -> a -> bc , a
 * abc -> b -> ac , b
 * abc -> c -> ab , c -> a -> b , ca
 *                      -> b -> a , cb  -> a -> _ , cba
 */



 printPermutation = (ques , ans) => {

    if (ques.length === 0) {
        console.log(ans)
        return
    }
    for (let index = 0; index < ques.length; index++) {
      
        let ch = ques.charAt(index)
        let roq = ques.substr(0, index) + ques.substr(index+1)

        printPermutation (roq , ans + ch)
    }
 }

//  printPermutation("abc" , "")

/**
 * print board path
 * ques ans
 * 0 -> 1 , "1"
 *   -> 2 , "2"
 *   ->3 , "3"
 *   ->4 , "4"  ----> 1 ----> 5 , "41"
 *   ->4 , "4"  ----> 2----> 6 , "42"
 *   ->4 , "4"  ----> 3 ----> 7 , "43"
 *   ->4 , "4"  ----> 4 ----> 8 , "44" ---> 1 ----> 9 , "441"
 *   ->4 , "4"  ----> 4 ----> 8 , "44" ---> 2 ----> 10 , "442" // print
 *   ->4 , "4"  ----> 4 ----> 8 , "44" ---> 3 ----> 11 , "443"
 *      
 */

 printBoardPath =  ( curr , end , ans) => {
     if(curr === end) {
         console.log(ans)
         return
     }
     if(curr > end) {
         return
     }
    for (let dice = 1; dice <= 6 ; dice++) {
    printBoardPath(curr + dice , end , ans+dice)
    }
 }

// printBoardPath(0 , 10 , "")

/**
 * print maze path
 * ques ans
 *   
 * (00) ""  -> H -> (0,1) "H"
 *          -> V -> (1,0) "V"
 */

printMazePath = (cr , cc , er, ec , ans) => {
    if(cr === er && cc === ec) {
        console.log(ans)
        return
    }
    if(cr > er || cc > ec) {
        return
    }
    printMazePath(cr , cc + 1 , er, ec , ans + "H")
    printMazePath(cr + 1 , cc , er, ec , ans + "V")

}

//printMazePath(0,0, 2,2,"")

printMazePathD = (cr , cc , er, ec , ans) => {
    if(cr === er && cc === ec) {
        console.log(ans)
        return
    }
    if(cr > er || cc > ec) {
        return
    }
    printMazePathD(cr , cc + 1 , er, ec , ans + "H")
    printMazePathD(cr + 1 , cc , er, ec , ans + "V")
    printMazePathD(cr + 1 , cc + 1 , er, ec , ans + "D")

}

// printMazePathD(0,0, 2,2,"")

// *********** N Queens ********************

countNQueens = (board , row) => {

    if(row === board.length) {
        return 1
    }

    let count = 0
    for (let col = 0; col < board.length; col++) {
       
       if(ifItSafe(board , row , col)) {
           board[row][col] = true
           count = count + countNQueens(board , row + 1)
           board[row][col] = false
       }
    }
    return count
}

ifItSafe = (board , row , col) => {
   
    for (let i = row; i>=0; i--) {
      if (board[i][col]){
          return false
      }
    }

    for (let i = row, j = col ; i>=0 && j>=0; i--, j--) {
        if (board[i][j]){
            return false
        }
      }

      for (let i = row, j = col ; i>=0 && j<board.length; i--, j++) {
        if (board[i][j]){
            return false
        }
      }

      return true

}

/**
 * 
 * [
 *  [t , f , f , f],
 *  [f , f,  f , f],
 *  [f , f,  f , f],
 *  [f , f,  f , f]
 * ]
 * board[1][1]
 */

// const rows = 4
// const cols = 4

// const nestedArray = Array.from(Array(rows), _ => Array(cols).fill(false));
// console.log(countNQueens(nestedArray , 0))


// *********** MergeSort
// divide and conquer algorithm

mergeTwoSortedArr = (fh , sh) =>{

    let i  = 0
    let j = 0  
    let mergedArr = []

    while (i < fh.length && j < sh.length) {
        if (fh[i] < sh[j]) {
            mergedArr.push(fh[i])
            i++
        }else{
            mergedArr.push(sh[j])
            j++
        }
    }

    if(i === fh.length) {
        for (let index = j; index < sh.length; index++) {
            
            mergedArr.push(sh[index])
        }
    } else{
        for (let index = i; index < fh.length; index++) {
            
            mergedArr.push(fh[index])
        }
    }

    return mergedArr
}

mergeSort = (arr , low , high) => {
    if(low === high) {
        return [arr[low]]
    }
    let mid = Math.floor((low + high)/2) ;

    let fh = mergeSort(arr , low , mid)
    let sh = mergeSort(arr , mid + 1 , high)

    let merge = mergeTwoSortedArr(fh , sh)

    return merge

}

// console.log(mergeSort(a,  0 , a.length - 1))

//****************** quicksort***************/

/**
 * Pivot element 
 * 
 * 1.) Partitioning  - we need to take a pivot element
 * 2. )choose any pivot element , can be first last anything
 * 3.) lo = 0 , hi = arr.len - 1 , mid = 4 , pivot = arr[4]
 * 4.) once partitioning is completed all smaller would be in left
 * and greater would be right to pivot i.e less than pivot on left 
 * and greater than pivot on right.
 * 5.) take two vars left and right
 * 6. ) if encounter any problem swap the values , increment left decrement right
 * note - pivot can lie on anyside
 */

 quickSort = (arr , low , high) => {
     if (low >= high) {
         return 
     }

    //1. partitioning
    let mid  = Math.floor((low+high) / 2)
    let pivot = arr[mid]

    let left = low
    let right = high

    while (left < right ) {
        while(arr[left] < pivot) {
            left ++
        }

        while (arr[right] > pivot) {
            right--
        }

        if(left <= right){
            [arr[left] , arr[right]] = [arr[right] , arr[left]]
            left ++
            right --
    }
       
    }
    //2. recursive call
    quickSort(arr, low ,  right) // because right nmoved before left
    quickSort(arr, left , high)
 }

//  console.log(a)
//  quickSort(a , 0 , a.length - 1)
//  console.log(a)

/********************************************* calculate power logn 
 * n == 0dd -> n/2 *n/2 * x
 * n == even -> n/2*n/2
 * *******/


power = (x,n) => {
    if (n === 0){
        return 1
    }
    let pnb2 = power(x , Math.floor(n/2))
    if (n%2 === 1 ) {
        return pnb2 * pnb2 * x
    }else {
        return pnb2 * pnb2
    }
}

// console.log(power(2,5))

SOE = (n) => {
  let primes =  new Array(n + 1).fill(true); // fill function
    primes[0] = false
    primes[1] = false

    for(let table = 2 ; table * table <= n ; table++){
        if(primes[table]){ // suppose 4 is cut then no need to call 4 since its multiples are called
            for (let multiples = 2 ; table * multiples <= n ; multiples++){
                primes[table * multiples] = false
            }
        }
    }

    primes.map((item , index) => {
        if(item){
            console.log(index)
        }
        
    })

}

// SOE(25)
