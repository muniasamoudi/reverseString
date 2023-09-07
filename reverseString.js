function reverseString(string) {
    let reversed = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
  
    return reversed;
  }
  
  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  console.log(reversedString); 