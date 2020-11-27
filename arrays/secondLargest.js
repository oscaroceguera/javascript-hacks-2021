const getSecondLargest = (num) => [...new Set(num.sort((a,b) => b - a))][1]


console.log(getSecondLargest([2,3,6,6,5]))
console.log(getSecondLargest([2,3,6,6,,23, 534, 23232, 23, 23, 543, 4504309, 2839, 995, 99,995, 99]))