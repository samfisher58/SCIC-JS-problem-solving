// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
	return str
		.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

console.log(capitalizeWords('hello world')); 