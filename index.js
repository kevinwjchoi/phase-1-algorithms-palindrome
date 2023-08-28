function isPalindrome(word) {
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome);


/* 
function isPalindrome (word) 
find the length of the word
use for loop to check first and last letter.
*/

/*
  Here is a function called isPalindrome that takes a word. 
  That word length is then assigned to const len. 
  A for loop is used to check the first and last character of the word. 
  if they dont match, it returns false and the word is not a palindrome.
  If the loop is successful throughout each loop, it returns true that the word is a palindrome.
  that result is assigned to value and it is console logged.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("No special characters")
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;