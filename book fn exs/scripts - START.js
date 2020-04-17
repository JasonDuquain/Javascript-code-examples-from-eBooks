
/// Juan udemy course
const countries = ['london', 'new york', 'madrid', 'paris', 'berlin'];



//// Stephen G udemy course
// Rest and Spread together



///////// Stephen H udemy course
// basic higher order fn



///// callback - YT
let students = [
    {name: "james", score: 100, school: "East"},
    {name: "steve", score: 40, school: "East"},
    {name: "gabe", score: 90, school: "West"},
    {name: "rachel", score: 85, school: "East"},
    {name: "jane", score: 95, school: "West"},
    {name: "lynn", score: 75, school: "East"}
];





///// closure



//counter(); - not needed now that the above fn is an IIFE

////closure2



///// What the heck is the event loop
//foreach is not running the cb asynchronously, its running it within the current stack so these console logs blk the stack (they happen fast so its not noticeable)




// The event loop and the rise of async programming article

/* The programming style of using callbacks is also called continuation-passing style (CPS), because the next step (the continuation) is explicitly passed as a param. This gives an invoked fn more control over what happens next and when. The following code illustrates CPS: */




///////javascript.info - Callbacks




/* In the task Animated circle an animated growing circle is shown. Now let’s say we need not just a circle, but to show a message inside it. The message should appear after the animation is complete (the circle is fully grown).

In the solution of the task, the function showCircle(cx, cy, radius) draws the circle, but gives no way to track when it’s ready.

Add a cb arg: showCircle(cx, cy, radius, cb) to be called when the animation is complete. The cb should receive the circle <div> as an arg. BEFORE (START and COMPLETE html is in index.html -- do all JS in index.html file):

<head>
  <meta charset="utf-8">
  <style>
    .circle {
      transition-property: width, height, margin-left, margin-top;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    }
  </style>
</head>

<body>

  <button onclick="showCircle(150, 150, 100)">showCircle(150, 150, 100)</button>

  <script>
  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
    }, 0);
  }
  </script>

</body>

*/




/////// JS NOVICE TO NINJA





































