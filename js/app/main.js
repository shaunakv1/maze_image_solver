$(function () {
    console.log("hello");
    // Load an image
    var image = document.getElementById('image');
    // Create a canvas with which we can edit an image
    canvas = document.getElementById('canvas');
    canvas.getContext('2d').drawImage(image, 0, 0);
    
    // Flood fill the image starting at point (50, 75) using the color red (255, 0, 0)
    var color = { r: 255, g: 255, b: 255, a: 255 };
    //console.log(image);
    floodfill(7, 9, color, canvas.getContext('2d'), image.width, image.height, 128);
});
