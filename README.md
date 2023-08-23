# KigoInterview

This was an hour long interview with two parts. The first part was an algorithm challenge. The second part was a design implementation in React Native. The files in the repo are the implementation of the design. 

My answer to the algorithm challenge:

Question:
Take the given code and write a function that outputs the longest word in the given string.

```
function findLongestWordLength(str) {
  return longestWord;
}
```

Answer:

```
const quick = "The Quick Brown Fox Jumps";

function findLongestWordLength(str) {
  const split = str.split(" ");
  let longestWord = "";
  split.forEach((element) => {
    if (element.length > longestWord.length) {
      console.log("current word: ", element);
      longestWord = element;
    }
  });
  return longestWord;
}

console.log(findLongestWordLength(quick));
```

This is an image of the final result of the implementation portion of the interview.

![image](https://github.com/AustinPoulson/KigoInterview/assets/58403188/9cbeed14-beab-4bd1-b11f-c90954b988d4)
