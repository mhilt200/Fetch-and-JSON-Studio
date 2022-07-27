window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
   let json = [];  
  // console.log(response);
  response.json().then(function(data) {

     // data.sort(function(a, b)) { // to possibly sort the astronauts by hours in space
     // return a.hoursInSpace - b.hoursInSpace;
   //  };

      let containerNode = document.getElementById("container");

      let html = "";

      for (let i = 0; i < data.length; i++){
         let astronaut = data[i];
         html += 
         `<div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                  <ul>
                     <li>Hours in space: ${astronaut.hoursInSpace}</li>
                     <li>Active: ${astronaut.active}</li>
                     <li>Skills: ${astronaut.skills}</li>
                  </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
         </div>`
      };
      containerNode.innerHTML = html;
    })
  })
})