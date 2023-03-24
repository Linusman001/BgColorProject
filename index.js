document.querySelector(".change-btn").addEventListener("click", change);




function change() {
    document.querySelector("body").style.backgroundColor = rgb(rgbColorGenerator(),rgbColorGenerator(),rgbColorGenerator());
    
}

function rgb (num1, num2, num3) {
    var colour = "rgb" + "(" + num1 + ", " + num2 + ", " + num3 + ")";
    return colour
}

function rgbColorGenerator() {
    var color = Math.floor(Math.random() * 255 + 1);
    return color;
}

