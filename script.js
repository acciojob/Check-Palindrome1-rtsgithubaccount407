// complete the given function

function palindrome(str){
const st = str.toLowerCase();
	const len = str.length;
	for(let i=0; i<len/2; i++){
		if(st[i] !== st[len-i-1]){
			return false;
		}
	}
	return true;
}

module.exports = palindrome
