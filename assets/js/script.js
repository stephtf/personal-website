console.log("This is the log for the 🔥EXTERNAL🔥JavaScript");

var hamburger = document.getElementsByClassName("hamburger")[0]
var projects = document.getElementsByClassName("projects")[0] 
var socialIcons = document.getElementsByClassName("icons-container")[0]

var mainContent = document.getElementsByClassName("content-box")[0]
var title = document.getElementsByClassName("title")[0]



hamburger.addEventListener("click",() => {
    projects.classList.toggle("active"); 
    socialIcons.classList.toggle("active");
    mainContent.classList.toggle("active");
    title.classList.toggle("active");
}) 

