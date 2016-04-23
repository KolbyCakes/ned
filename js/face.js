function nedface() {
    var image = document.getElementById('myImage');
    if (image.src.match("http://isaiahpatton.github.io/ned/imgs/ned.gif")) {
        image.src = "http://isaiahpatton.github.io/ned/imgs/ned.jpg";
    } else {
        image.src = "http://isaiahpatton.github.io/ned/imgs/ned.gif";
    }
}
