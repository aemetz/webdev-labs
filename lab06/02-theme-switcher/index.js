/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/


const changeThemeToDefault = () => {
   document.querySelector("body").className = ''
};

const changeThemeToDesert = () => {
   document.querySelector("body").className = 'desert'
};

const changeThemeToOcean = () => {
   document.querySelector("body").className = 'ocean'
};

const changeThemeToHighContrast = () => {
   document.querySelector("body").className = 'high-contrast'
};

document.querySelector("#default").addEventListener('click', changeThemeToDefault);
document.querySelector("#desert").addEventListener('click', changeThemeToDesert);
document.querySelector("#ocean").addEventListener('click', changeThemeToOcean);
document.querySelector("#high-contrast").addEventListener('click', changeThemeToHighContrast);