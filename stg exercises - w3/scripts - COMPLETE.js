

/************  4   ************/

function truncate_string(stg, num) {
    
    return stg.slice(0, num);
    
}

console.log(truncate_string("Robin Singh",4));


/************  5   ************/

function abbrev_name(stg) {
    let hay = stg.split('');
    let newArr = [];
    
    for (let i = 0; i < hay.length; i++) {
        if (hay[i-1] === ' ') {
           newArr.push(hay[i]);
           newArr.push(".");
            break;
        }
        newArr.push(hay[i]);
    }
    
    return newArr.join('');
    
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

function abbrev_name(stg) {
    let hay = stg.split(' ');
    let newArr = [];
    
    let trunkLastName = hay[1].slice(0, 1);
    
    newArr = [hay[0], " ", trunkLastName, "."];
    
    return newArr.join('');
    
}

console.log(abbrev_name("Robin Singh"));


/*************  6  *************/
////replace part to the left of the @ sign with half its value then ...


function protect_email(stg) {
    let arr = stg.split('@');
    let half = Math.round(arr[0].length / 2);
    let arrTwo = arr[0].slice(0, half);
    let lastArr = [arrTwo, "...@", arr[1]];
    return lastArr.join('');
}

console.log(protect_email("robin_singh@example.com"));


/////// ALTERNATE SOLUTION - CLEANER

function protect_email(stg) {
    let arr = stg.split('@');
    let half = Math.round(arr[0].length / 2);
    return `${stg.slice(0, half)}...${stg.slice((stg.indexOf('@')), stg.length)}`;
}

console.log(protect_email("robin_singh@example.com"));


/*************  13  *************/
function repeat(stg, num = 1) {
    
    let result = '';
    
    for (let i = 0; i < num; i++) {
       
       if (num === 1) {
           result += stg
           break;
       }
       
       result += stg
   }
    
    return result;
    
}

/////// ALTERNATE SOLUTION
function repeat(stg, num) {
    if (!num) {
        return stg;
    } else {
        let arr = new Array(num);
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            arr[i] = stg;
            newArr.push(arr[i]);
        }
        
        return newArr.join('');
    }
    
}

console.log(repeat('Ha!')); 
console.log(repeat('Ha!',4)); 


/*************  17  *************/

/* The match fn returns matches as an ARRAY!!!
Use new RegExp(string) to build a regular expression dynamically (using a variable). The literal /../ form cannot be used with dynamic content.
*/
function string_chop(str, n = 1){

    let re = new RegExp(`.{1,${n}}`, 'g');
    return str.match(re).join(' ');
}



console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',3));


/*************  18  *************/


console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));

function count(stg, substg) {
    
    let re = new RegExp(`${substg}`, "ig");
    return stg.match(re).length;
    // or one line: return stg.match(new RegExp(`${substg}`, "ig")).length;
}


/*************  19  *************/

function escape_HTML(stg) {
    
    return stg.replace(/</, '&lt;').replace(/</, '&gt;')
}


console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
console.log(escape_HTML('a href="javascript-string-exercise-17.php" target="_blank"'));






