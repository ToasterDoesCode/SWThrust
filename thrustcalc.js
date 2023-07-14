function lerp(a, b, c)
{
    return (c * a) + ((1-c) * b)
}
function calculate()
{
	var mass = parseInt(document.getElementById("mass").value);
	var speed = parseInt(document.getElementById("speed").value);
	
	massrange = (mass - 200000) / 7800000;
	speedrange = (speed - 150) / 100;
	
	if (speed != NaN)
	{
		document.getElementById("massout").innerHTML = String(lerp(200000, 8000000, speedrange));
	}
	if (mass != NaN)
	{
		document.getElementById("speedout").innerHTML = String(lerp(150, 250, massrange));
	}
}