//Question 1
function sayHello() {
    console.log('Hello!')
    
  }
sayHello();


//Question 2
function addOne(num,num2) {
  console.log (num + num2)
}
addOne (2,8)

//Question 3
// function addTwoNumbers(num1, num2) { 
//   if (typeof num1 === 12 && typeof num2 === 12) {
//     return num1 + num2
//   } else {
//     return NaN
 
    
//   }
//   addTwoNumbers(num1,num2)

//Question 4
function sumNumbers(array) {
  const Array = [1, 4, 0, 9, -3];
  let sum = 0;


  //Question 5
  for (let i = 0; i < Array.length; i += 1) {
    sum += Array[i];
  }
  
  return sum;
}

console.log(sumNumbers([1, 4, 0, 9, -3]));


const numbers = [1, 2, 3, 4, 5]
numbers.forEach((i) => {
console.log(i);
  });

  //Question 6
  
  function range(start, finish) {
    if (start > finish) return 'First argument must be less than second'
  
   let range = []
    for (let n = start; n <= finish; n++) {
      range.push(n)
    }
  
    return range

  }
  console.log(range(10,20))

  //7
  
  const str = "nathan"
const newStr = str.split("")
console.log(newStr.reverse().join(""))


  //8
   function removeEnds(string) {
     let newstring = string.split("").pop()
   
     return newstring 
   }
   console.log(removeEnds("nathan"))



  //9
 
let charCount = {a: 1, b: 2, c: 3};
var count = 0;
for (let key in charCount) {
    count++;
}
console.log(count); 

  //10




  //11 palindrome
  function check_palindrome( str )
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;//forward character
      let y = str[j-i];//backward character
      if( x != y)
      {
        // return false if string not match
        return false;
      }
    }
    /// return true if string is palindrome
    return true;
     
  }
 
  //function that print output if string is palindrome
  function is_palindrome( str )
  {
    // variable that is true if string is palindrome
    let ans = check_palindrome(str);
    //condition checking ans is true or not
    if( ans == true )
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string not a palindrome");
    }
  }
  // test variable
  let test = "racecar";
  is_palindrome(test);

  //12
function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) return NaN
  let count = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) !== s2.charAt(i)) count++
  }
}
  console.log(count)



//13
function mumble(str) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
    result += ((i || '') && '-') + str.charAt(i).repeat(i + 1)
  }
  console.log( result)
}


//14
function fromPairs(arr) {
  var obj = {}
  arr.forEach(function (kvArr) {
    obj[kvArr[0]] = kvArr[1]
  })
  return obj
}



//15
function mergeObjects(target, ...objects) {
  objects.forEach(function (obj) {
    for (let key in obj) {
      target[key] = obj[key]
    }
  })
return target
}

// 16
function findHighestPriced(arr) {
  let highestPrice = 0
  let resultObj
  arr.forEach(function (item) {
    if (item.price > highestPrice) {
      highestPrice = item.price
      resultObj = item
    }
  })
  return resultObj
}
//17
function mapArray(arr, cb) {
  let newArr = []
  arr.forEach(function (el, idx) {
    newArr.push(cb(el, idx))
  })
  return newArr
}
//18
function reduceArray(arr, cb, initAcc) {
  let acc = initAcc
  arr.forEach(function (el, idx) {
    acc = cb(acc, el, idx)
  })
  return acc
}
//19
function flatten(arr) {
  let flatArr = []
  arr.forEach(function (elem) {
    if (Array.isArray(elem)) {
      flatArr = flatArr.concat(flatten(elem))
    } else {
      flatArr.push(elem)
    }
  })
  return flatArr
}
//20
function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false
  for (let i = 2; i <= n / 2; i++) {
    if (Number.isInteger(n / i)) return false
  }
  return true
}
//21
function primeFactors(n) {
  var factors = []
  if (n < 2 || !Number.isInteger(n)) return factors

  // function to help find next prime to divide by...
  function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false
    for (var i = 2; i <= n / 2; i++) {
      if (Number.isInteger(n / i)) return false
    }
    return true
  }

  var prime = 2 // start with smallest prime
  while (!isPrime(n)) {
    if (Number.isInteger(n / prime)) {
      factors.push(prime)
      n = n / prime
    } else {
      // find next prime
      prime++
      while (!isPrime(prime)) prime++
    }
  }
  factors.push(n)
  return factors
}
//22
function intersection(a1, a2) {
  var result = []
  // create copy of 2nd array for purpose of handling dups
  var _a2 = [...a2]
  a1.forEach((val) => {
    var idx = _a2.indexOf(val)
    if (idx > -1) result.push(_a2.splice(idx, 1)[0])
  })
  return result
}
//23
function balancedBrackets(str) {
  // can't be balanced if string odd in length
  if (str.length % 2) return false
  var stack = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charAt(i)
    if ('([{'.includes(b)) {
      // add opening brackets to the stack
      stack.push(b)
    } else {
      // not an opening bracket, so remove last opening and check if matched
      if (!'() {} []'.includes(stack.pop() + b)) return false
    }
  }
  return true
}

//24

function isWinningTicket(ticket) {
  var winner = true
  for (var i = 0; i < ticket.length; i++) {
    var charFromNumber = String.fromCharCode(ticket[i][1])
    if (!ticket[i][0].includes(charFromNumber)) {
      winner = false
      break
    }
  }
  return winner
}


25//
function getNumForIP(ip) {
  
  var chunks = ip.split('.').reverse()
  var sum = 0
  chunks.forEach(function (chunk, idx) {
    sum += parseInt(chunk) * 256 ** idx
  })
  return sum
}


26//

function toCamelCase(str) {
  return str.replace(/[_-]\w/g, function (match) {
    return match.charAt(1).toUpperCase()
  })
}


27//

function countTheBits(int) {
  return int
    .toString(2)
    .split('')
    .filter((bit) => bit === '1').length
}

28//
function gridTrip(xyArr, moves) {
  var result = [xyArr[0], xyArr[1]]
  const lookup = { U: [0, 1], R: [1, 1], D: [0, -1], L: [1, -1] }
  var idx = 0
  while (idx < moves.length) {
    var dir = moves[idx]
    idx++
    var numString = ''
    while ('0123456789'.includes(moves[idx]) && idx < moves.length) {
      numString += moves[idx]
      idx++
    }
    result[lookup[dir][0]] += numString * lookup[dir][1]
  }
  return result
}



29//

function addChecker(nums, total) {
  var result = false
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === total) return true
    }
  }
  return result
}

30//

function totalTaskTime(tasks, numThreads) {
  var time = 0,
    shortest,
    threads
  while (tasks.length > numThreads) {
    threads = tasks.splice(0, numThreads)
    shortest = Math.min(...threads)
    time += shortest
    threads = threads.map((t) => t - shortest).filter((t) => t)
   
    tasks = threads.concat(tasks)
  }
  return time + (tasks.length ? Math.max(...tasks) : 0)
}