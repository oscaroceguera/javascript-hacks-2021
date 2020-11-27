const arr = ['a', 'b', 'c', 'd'];

arr.forEach((value, index, array) => {
    console.log('index', index, 'has a value of', value,
    'which correlates to array[' + index + ']:', array[index]);
});

arr.forEach((value, index) => {
    console.log('index', index, 'has a value of', value);
});

arr.forEach((value) => {
    console.log('value:', value);
});