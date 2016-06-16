function nedface() {
    var image = document.getElementById('myImage');
    if (image.src.match("http://i.imgur.com/AP5imrD.png")) {
        /*document.write('<CENTER><h2 style="color:white">Ned News!</h2></CENTER>');
        document.write('<nednews syle="color:white">');
        document.write('Welcome to the brand new NedNews!');
        document.write('');
        document.write('</nednews>');*/
        image.src = "http://n-e-d.github.io/ned/imgs/ned.gif";
    } else {
        image.src = "http://i.imgur.com/AP5imrD.png";
    }
}
function faceHtml() {
    document.write('<div class="inner">')
    document.write('<!--Ned Face--><CENTER>')
    document.write('<!--<img id="myImage" src="http://i.imgur.com/AP5imrD.png" onclick="nedface()" alt="Ned's Face" height="200" width="600"><br>-->');
    document.write('<script type="text/javascript" src="http://n-e-d.github.io/ned/js/settings.js"></script>');
    document.write('<p id="demo">');
    document.write('<script type="text/javascript" src="http://n-e-d.github.io/ned/js/settings.js"></script>');
    document.write('<!--JavaScript change Ned face-->');
    document.write('<script type="text/javascript" src="http://n-e-d.github.io/ned/js/face.js"></script>');
    document.write('</CENTER>');
    document.write('</div>');
}
