function checkPalindrome(string) {
  const palindrome = string.split('').reverse().join('');
  if (string === palindrome) {
    return true;
  }
  return false;
}
console.log(checkPalindrome('arara'));