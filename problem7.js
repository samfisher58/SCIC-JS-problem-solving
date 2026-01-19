// Problem 7: Find Even Numbers in an Array

function findEvenNumbers(arr) {
	return arr.filter(num => num % 2 === 0);
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 