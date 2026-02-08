//Global variables
var isColorModeLight = true;

//Function to change color mode
function onColorModeChanged() {
    //Get elements from DOM
    let bodyElement = document.body;
    let bgElement = document.querySelector('.background');
    let navBar = document.querySelector('#navContainer');
    let colorModeIcon = document.getElementById('navSun');
    let navItems = document.querySelectorAll('.navBar ul li a');
    let homePageCard = document.querySelector('#homePage');
    let homePageH1 = document.querySelector('#homePage h1');
    let homePageParagraphs = document.querySelectorAll('#homePage p');
    let homePageLine = document.getElementById('homePageLine');

    //Toggles
    bodyElement.classList.toggle('dark');
    bgElement.classList.toggle('dark');
    navBar.classList.toggle('dark');
    homePageCard.classList.toggle('dark');
    navItems.forEach(function(tab) {
        tab.classList.toggle('dark');
    });
    homePageH1.classList.toggle('dark');
    homePageParagraphs.forEach(function(paragraph) {
        paragraph.classList.toggle('dark');
    }); 
    homePageLine.classList.toggle('dark');

    //Turn light to dark now
    if (isColorModeLight) {
        colorModeIcon.src = "Media/moon.png";
    } 
    //Turn dark to light now
    else {
        colorModeIcon.src = "Media/sun.png";    
    }
    //Swap color mode tracker
    isColorModeLight = !isColorModeLight;
}