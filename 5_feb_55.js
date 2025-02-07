

// 1. Metacharacter

//1. '.' : Matches any character with ('.')

// let regex=/a.b/;
// console.log(regex.test('acebmts'))


// 2. (\d) : Matches any digit 0-9;

// let regex=/\d+/
//console.log(regex.test('abc'))
// console.log('abc789'.match(regex))


// 3.\d matches any digit 0-9
// let data="how are you username dev@123 and email ysdev901@gmail.com"
// let regex=/\d+/g
// console.log(data.match(regex))


// 4. \D matches any digit 0-9
// let data="how are you username dev@123 and email ysdev901@gmail.com"
//  let regex=/\D+/g
//  console.log(data.match(regex))



// 5. (\w) matches any word character;
//  let data="how are you username dev@123 and email ysdev_901@gmail.com"
//   let regex=/\w+/g
//   console.log(data.match(regex))



  // 6. (\w) matches any non word character;
//  let data="how are you username dev@123 and email ysdev_901@gmail.com"
//  let regex=/\W+/g
//  console.log(data.match(regex))



 // 7. (\s) matches any white space (space tab newline);
//  let data="how are you username dev@123 and email ysdev_901@gmail.com"
//  let regex=/\s+/g
//  console.log(data.match(regex))


  // 8. (\S) matches any non-white space (space tab newline);
//   let data="how are you username dev@123 and email ysdev_901@gmail.com"
//   let regex=/\S/g
//   console.log(data.match(regex))


// 9.(/b) : word boundry ( match position statrt or end of word)
// let regex=/\bcat\b/
// console.log(regex.test('cat dog'))


// 10.(/B) : Non-word boundry ( match position statrt or end of word)
//  let regex=/\baman\b/
//  console.log(regex.test('aman ajay abhay'))


// 11. (^) : Matches ther starting of dtring
// let reg=/^@gmail/
// console.log(reg.test("@gmail.com"))



// 12. ($) : Matches ther ending of dtring
//  let reg=/ae$/
//  console.log(reg.test("ae yor broae"))


//13. (|) : alternate  (or)
// let reg=/good|bad/
// console.log(reg.test('i am very bad'))
// console.log(reg.test('i am good but pata nhi'))


// 14. (|) :  Grouping 
// let reg=/(game|swim|float)ing?/
// console.log(reg.test('i am very gameing'))
// console.log(reg.test('i am good but pata nhi'))


// 15 (+) : matches one or  ore the preceding charachter
// let reg=/to+/
// console.log(reg.test('to'))
// console.log(reg.test('tooo'))
// console.log(reg.test('tooooo'))

// 16. (\) : Escape special character.
let reg=/\@/
console.log(reg.test('a@b'))
console.log(reg.test('abc'))




// 2. Brackets
