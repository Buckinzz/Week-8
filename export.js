function add(num1, num2) {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	} else {
		return null;
	}
}

function subtract(num1, num2) {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 - num2;
	} else {
		return null;
	}
}

module.exports = subtract;
module.exports = add;