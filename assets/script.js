
let button =document.getElementById("navButton");

button.addEventListener("click",()=> {

    let logo =document.getElementById("porscheLogo");
    
    if(logo.style.display == "none")
        logo.style.display = "block";
    else
        logo.style.display = "none";
})