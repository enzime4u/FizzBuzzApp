function writeP(text, className, tag) {
	document.write("<" + tag + " class=" + className + ">" + text + "<" + tag + ">" );
}

var errorMsg = "You didn't choose a number between 10 and 100 , please try again ! :)";	
var chooseNumMsg = "Pick a number between 10 and 100" ;

var userInput = Number(prompt(chooseNumMsg));
var counter = 1 ;
writeP ( "You chose:" + userInput,'choice');

while (isNaN(userInput) || userInput <10 || userInput >100 ) {
	userInput = Number(prompt(errorMsg));
 } 
 // writeP ("You chose:" + userInput,"choice");
while (counter <= userInput ) {
	if ( counter % 7 == 0 && counter % 5 == 0 || counter % 7 == 0 && counter % 3 ==0 ) {
		writeP( "<h3>" + 'FizzBazzBuzz!' + "</h3>" , 'bazz' );
	} else if (counter % 3 == 0 && counter % 5 == 0 ){
		writeP( "<h3>" + 'FizzBuzz!' + "</h3>" , 'fizzbuzz' );
	} else if (counter % 3 == 0 ) {
		writeP( "<h3>" + 'Fizz' + "</h3>" , 'fizz' );
	} else if (counter % 5 == 0 ) {
		writeP( "<h3>" + 'Buzz' + "</h3>" , 'buzz' );
	} else {
		writeP( "<p>" + counter + "</p>" );
	}
	counter = counter + 1;
}

