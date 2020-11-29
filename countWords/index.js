function countWords(words) {
  let wordsArray = words.split("")

  let result = ""
  let counter = 1

  wordsArray.forEach((element, index, array) => {
    if (array[index] === array[index + 1]) {
      counter++
    } else {
      result += array[index] + counter
      counter = 1
    }
  });

  return result
}

console.log(countWords('aaaeiiooou'))
// countWords('aaaadeebgbbaaasporss')