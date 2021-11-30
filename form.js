/*function toReturn(b) {
    a = b;
    document.getElementById('result').innerHTML = b;
}
function toReturn1(c) {
    c = d;
    document.getElementById('result1').innerHTML = c;
}*/
function toReturn(firstname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(firstname.value.length==0)
	{
		alert('Please enter first name');
		firstname.focus();
		return false;
	}

	else if(firstname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		firstname.focus();
		return false;
	}
}