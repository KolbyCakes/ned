function nedface() {
    var image = document.getElementById('myImage');
    if (image.src.match("http://i.imgur.com/AP5imrD.png2")) {
        image.src = "http://isaiahpatton.github.io/ned/imgs/ned.gif";
    } else {
        image.src = "http://i.imgur.com/AP5imrD.png";
    }
}
