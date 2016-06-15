function nedface() {
    var image = document.getElementById('myImage');
    if (image.src.match("http://i.imgur.com/AP5imrD.png")) {
        document.write('<CENTER><h2 style="color:white">Ned News!</h2></CENTER>');
        document.write('<nednews syle="color:white">');
        document.write('Welcome to the brand new NedNews!');
        document.write('');
        document.write('</nednews>');
        //image.src = "http://n-e-d.github.io/ned/imgs/ned.gif";
    } else {
        image.src = "http://i.imgur.com/AP5imrD.png";
    }
}
