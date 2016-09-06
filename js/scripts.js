var tempC = document.getElementById("tempc");

var result = document.getElementById("convertedtemp");

tempC.addEventListener("input",add);


function add(){ 
	var temp = parseFloat(tempC.value) || 0 ;
	result.innerHTML = "Farenheit is = " + ((temp*9/5)+32);
	
}

var tempF = document.getElementById("tempf");

var resultc = document.getElementById("convertedtempc");

tempF.addEventListener("input",addc);


function addc(){ 
	var temp = parseFloat(tempF.value) || 0 ;
	resultc.innerHTML = "Celcius is = " + ((temp - 32) * 5/9);
	
}

var yoName = document.getElementById("name");
var nameReturn = document.getElementById("namereturn");
var size = document.getElementById("thesize");

yoName.addEventListener("input",counter);



function counter()  {
	
	nameReturn.innerHTML = yoName.value.length;
	if (yoName.value.length <= 3) {
		size.innerHTML = "OMG! Your name is TINY!!";
	} else if (yoName.value.length < 7){
		size.innerHTML = "Congratulations!, You are an average size";
	}else {
		size.innerHTML = "HOLY GOD, YOUR NAME IS HUGE BRO!";
	}
}