function nedface() {
    var image = document.getElementById('nedface');
    if (image.src.match("https://isaiahpatton.github.io/ned/imgs/ned.gif")) {
        image.src = "http://isaiahpatton.github.io/ned/imgs/ned.jpg";
    } else {
        image.src = "http://isaiahpatton.github.io/ned/imgs/ned.gif";
    }
}
