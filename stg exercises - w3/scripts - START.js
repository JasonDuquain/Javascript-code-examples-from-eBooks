/* IF THERE IS NO OUTPUT IN THE FUNCTIONS MAKE SURE THERE IS NOT ONE ABOVE CLOBBERING IT */

/************  4   ************/

function truncate_string(stg, num) {
    
    
    
}

console.log(truncate_string("Robin Singh",4));


/************  5   ************/

function abbrev_name(stg) {
    
    
	//similar but no arrays:
	/*
	let abbrevString = '';

    for (let i = 0; i < stg.length; i++) {
        abbrevString += stg[i]
        if (stg[i-1] === ' ') {
            abbrevString += '.';
            break;
        }
    }
    
    return abbrevString;
	*/
	
}

console.log(abbrev_name("Robin Singh"));


///////ALTERNATE SOLUTION - CLEANER BUT COULD BE IMPROVED?

/*

function abbrev_name(stg) {
    
    
}

*/


console.log(abbrev_name("Robin Singh"));


/*************  6  *************/
////replace part to the left of the @ sign with half its value then ...


function protect_email(stg) {
    
}


console.log(protect_email("robin_singh@example.com"));


/////// ALTERNATE SOLUTION - CLEANER
/*


function protect_email(stg) {
   
}

*/

console.log(protect_email("robin_singh@example.com"));


/*************  13  *************/


function repeat(stg, num = 1) {
    
    
    
}


/////// ALTERNATE SOLUTION
/*


function repeat(stg, num) {
    
    
}

*/

console.log(repeat('Ha!')); 
console.log(repeat('Ha!',4)); 


/*************  17  *************/

/* The match fn returns matches as an ARRAY!!!
Use new RegExp(string) to build a regular expression dynamically (using a variable). The literal /../ form cannot be used with dynamic content.
*/


function string_chop(str, n = 1){

    
}



console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',3));


/*************  18  *************/


console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));


function count(stg, substg) {
    
    
}


/*************  19  *************/


function escape_HTML(stg) {
    
    
}


console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
console.log(escape_HTML('a href="javascript-string-exercise-17.php" target="_blank"'));


