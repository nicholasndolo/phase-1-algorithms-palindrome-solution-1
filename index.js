function reverseString(word){
 // create an array from the input string
 const wordArray = word.split("");
 // reverse the array
 const reversedWordArray = wordArray.reverse();
 // create a string from the reversed array
 const reversedWord = reversedWordArray.join("");
 // return the reversed string
 return reversedWord;
}





function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string
  const reversedWord = reverseString(word)
  //compare the the reversed string to the input.
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/
/*
  Add written explanation of your solution here
  I need to implement isPalindrome function that takes a string as input and returns true or false. If the 
  input string is the same as when it's reversed, I should return true, otherwise return false. For example
  "eye" in reverse is also "eye" and "madam" in reverse is aslo "madam". My solution should return true for this these cases.
  "Good" in reverse is "dooG", so my solution should return false for this this case.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
