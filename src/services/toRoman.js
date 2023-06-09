export function toRoman(n) {
	var r = '',
			decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
			roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	for (var i = 0; i < decimals.length; i++) {
			while (n >= decimals[i]) {
					r += roman[i];
					n -= decimals[i];
			}
	}
	return r;
}