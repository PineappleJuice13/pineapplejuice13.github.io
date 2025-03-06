const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Declaring the array of image filenames */
const imgList = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', 
    './images/pic4.jpg', './images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const imgAlts = ["Close up of a greyish green eye.", "Idk what that is.", 
    "Purple and white flowers.", "Egyptian art on a wall.", 
    "Large moth ontop of a large green leaf."];

/* Looping through images */
for (let i = 0; i < imgList.length; i ++) {
    const newImage = document.createElement('img');

    newImage.scr = imgList[i];
    newImage.setAttribute('src', imgList[i]);
    newImage.setAttribute('alt', imgAlts[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", event => {
        displayedImage.src = event.target.src;
        displayedImage.img = event.target.img;

    });
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", (event) => {
    const btnClass = btn.getAttribute('class')

    if (btnClass == "dark"){
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
        //overlay.setAttribute("backgroundColor", "rgba(0,0,0,0.5)")
    }
    else {
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'

    }

});