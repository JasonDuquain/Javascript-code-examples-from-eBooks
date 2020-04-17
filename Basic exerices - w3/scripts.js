
// 1. Write a  program to display the current day and time in the following format:
//Sample Output : Today is : Tuesday. 
//Current time is : 10 PM : 30 : 38

function current() {
    let date = new Date();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = week[new Date().getDay()]
    let hours = date.getHours();
    // might need to adjust the conditonal for minight which is 0
    (hours > 12) ? hours += ' PM' : hours += ' AM';
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`Today is: ${today}`);
    console.log(`Current time is: ${hours}: ${minutes}: ${seconds}`);
}

//current();



// 3. Write a program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function printDate() {
    const date = new Date();
    let mm = (date.getMonth() + 1);
    if (mm < 10) {
       mm = `0${mm}`; 
    }
    let dd = (date.getDate());
    if (dd < 10) {
       dd = `0${dd}`; 
    }
    const yyyy = date.getFullYear();

    console.log(`${mm}-${dd}-${yyyy}`);
}

//printDate();


// 5. Write a program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-5.php

//todo: try to animate it so when the regular word shows it paused one second




//trying to get animate to keep going after initial pause..
/*
function rotateIt() {
    let pre = document.querySelector('#target');
    let text = pre.textContent;
     
    let clearIt = setInterval(() => {
        let arr = text.split('');
        let char = arr.pop();
        let unshift = arr.unshift(char);
        let stringIt = arr.join('');
        console.log(stringIt)
        text = stringIt;
        pre.textContent = text;

        setTimeout(() => {
            clearInterval(clearIt);
        }, 300 * text.length);

    }, 300);    
        
}


rotateIt();
*/



//their solution..in onload must be in html in order to pass an arg to the fn..and it has the pre tab inside of it and the body is wrapped inside a body tag **?88!
/*

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

*/

