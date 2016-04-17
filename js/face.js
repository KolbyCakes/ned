function nedface() {
    var image = document.getElementById('nedface');
    if (image.src.match("http://isaiahpatton.github.io/ned/imgs/ned.jpg")) {
        image.src = "http://isaiahpatton.github.io/ned/imgs/ned.gif";
    } else {
        image.src = "http://isaiahpatton.github.io/ned/imgs/ned.jpg";
    }
}
