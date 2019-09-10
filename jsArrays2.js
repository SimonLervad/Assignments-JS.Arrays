'use strict';

const first = function (txt) {
    return txt.charAt(0);
}

const last = function (txt) {
    return txt.charAt(txt.length - 1);
}

const middle = function (txt) {
    return txt.substring(1, txt.length - 1);
}

let isPalindrome = function(str) {
	if (str.length<=1) 
		return true
	console.log(str)
	return first(str) === last(str) &&
		isPalindrome(middle(str));
}
let txt = prompt('skriv tekst her');
console.log(isPalindrome(txt))