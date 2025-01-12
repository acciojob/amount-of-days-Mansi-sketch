//your JS code here. If required.
function leapyear(year) {
	
	if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
		return 366;
	}
	else{
		return 365;
	}
}
console.log(leapyear(2020));