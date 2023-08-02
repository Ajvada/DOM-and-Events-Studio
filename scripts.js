// Write your JavaScript code here.
// Remember to pay attention to page loading!

 window.addEventListener("load", function() {

        const takeoff= document.getElementById("takeoff");
        const flightStatus= document.getElementById("flightStatus"); 
        const background= document.getElementById("shuttleBackground"); 
        const shuttleHeight= document.getElementById("spaceShuttleHeight");
        const land= document.getElementById("landing"); 
        const missionAbort= document.getElementById("missionAbort"); 
        const up= document.getElementById("up");
        const down= document.getElementById("down");
        const left= document.getElementById("left");
        const right= document.getElementById("right"); 
        const rocket= document.getElementById("rocket"); 
        
        
        takeoff.addEventListener('click', event=> {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(confirm){
        flightStatus.innerHTML= "Shuttle in flight.";
        background.style.backgroundColor = "blue"; 
        shuttleHeight.innerHTML=10000;
        }
       })
    
       land.addEventListener('click', event=> {
        let confirm = window.confirm("The shuttle is landing. Landing gear engaged.")
        if(confirm){
        flightStatus.innerHTML= "The shuttle has landed.";
        background.style.backgroundColor = "green"; 
        shuttleHeight.innerHTML=0;
        }
       }) 
        
       missionAbort.addEventListener('click', event=> {
        let confirm = window.confirm("Confirm that you want to abort the mission.")
        if(confirm){
        flightStatus.innerHTML= "Mission aborted.";
        background.style.backgroundColor = "green"; 
        shuttleHeight.innerHTML=0;
        }
       })  
       
       up.addEventListener('click', event => {
              rocket.style.top = (parseInt(rocket.style.top) - 10) + "px";
              shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
            }); 

       down.addEventListener('click', event => {
              rocket.style.top = (parseInt(rocket.style.top) + 10) + "px";
              shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
            });

       right.addEventListener('click', event => {
              rocket.style.left = (parseInt(rocket.style.left) + 10) + "px";
            }); 
       left.addEventListener('click', event => {
              rocket.style.left = (parseInt(rocket.style.left) - 10) + "px";
            });
      

        
















})
window.addEventListener("load", init);