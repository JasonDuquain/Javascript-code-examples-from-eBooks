 'use strict';


////PROMISES
/* this example works but look at line (*) we cannot do anything after the avatar has finished loading
   
fetch('article/promise-chaining/user.json')

  // Load it as json
  .then(response => response.json())
  
  // Make a request to github
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  
  // Show the avatar image (githubUser.avatar_url) for 3 seconds 
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });


To make the chain extendable, return a promise that resolves when the avatar finishes showing:   */
      
/*     
fetch('article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // return a promise
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser); 

      // Now right after setTimeout runs img.remove(), it calls resolve(githubUser), thus passing the control to the next .then in the chain and passing forward the user data. As a rule, an async action should always return a promise.

    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => console.log(`Finished showing ${githubUser.name}`));
*/      
      
/// TODO - add the err handling examples //////





////// ASYNC/AWAIT
/*
async function showAvatar() {

  // read our JSON
  let response = await fetch('article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));

  img.remove();
  return githubUser;
}

showAvatar();
*/