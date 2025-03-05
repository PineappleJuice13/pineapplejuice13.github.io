const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Declaring the array of image filenames */
const imgList = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg'];


/* Declaring the alternative text for each image file */

const imgAlts = ["Close up of a greyish green eye.", "Idk what that is.", 
    "Purple and white flowers.", "Egyptian art on a wall.", 
    "Brown butterfly ontop of a big green leaf."]

/* Looping through images */


for (let i = 0; i < imgList.length; i ++) {
    const newImage = document.createElement('img');

    newImage.scr = imgList[i];
    newImage.setAttribute('src', imgList[i]);
    newImage.setAttribute('alt', imgAlts[i]);
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
