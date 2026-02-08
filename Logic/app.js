//Global variables
var isColorModeLight = true;

//Function to change color mode
function onColorModeChanged() {
    //Body
    let bodyElement = document.body;
    bodyElement.classList.toggle('dark');

    //Background
    let bgElement = document.querySelector('.background');
    bgElement.classList.toggle('dark');

    //Navigation Bar
    let navBar = document.querySelector('#navContainer');
    navBar.classList.toggle('dark');

    //Color Mode Icon
    let colorModeIcon = document.getElementById('navSun');
    let navItems = document.querySelectorAll('.navBar ul li a');
    let homePageCard = document.querySelector('#homePage');
    let homePageH1 = document.querySelector('#homePage h1');
    let homePageParagraphs = document.querySelectorAll('#homePage p');
    
    //Section Heading 1s
    let sectionsHead1 = document.querySelectorAll('.sectionHead1');
    sectionsHead1.forEach(function(heading) {
        heading.classList.toggle('dark');
    });

    //Toggles
    homePageCard.classList.toggle('dark');
    navItems.forEach(function(tab) {
        tab.classList.toggle('dark');
    });
    homePageH1.classList.toggle('dark');
    homePageParagraphs.forEach(function(paragraph) {
        paragraph.classList.toggle('dark');
    }); 

    //Turn light to dark now
    if (isColorModeLight) {
        console.log("Changing to dark mode");
        colorModeIcon.src = "../Media/moon.png";
    } 
    //Turn dark to light now
    else {
        colorModeIcon.src = "../Media/sun.png";    
    }
    //Swap color mode tracker
    isColorModeLight = !isColorModeLight;
}