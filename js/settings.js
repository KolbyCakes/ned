document.getElementById("demo").innerHTML = '<img id="myImage" src="http://i.imgur.com/AP5imrD.png" onclick="nedface()" height="200" width="600"><br>';

function hideface() {
document.getElementById("demo").innerHTML = '';
document.getElementById("hide").innerHTML = '';
document.getElementById("show").innerHTML = '<nedface id="hide" onclick="showface()">Show face</nedface>';
}

function showface() {
document.getElementById("demo").innerHTML = '<img id="myImage" src="http://i.imgur.com/AP5imrD.png" onclick="nedface()" height="200" width="600"><br>';
document.getElementById("hide").innerHTML = '<nedface id="hide" onclick="hideface()">Hide face</nedface>';
document.getElementById("show").innerHTML = '';
}

function hbox() {
document.getElementById("inside").innerHTML = '';
document.getElementById("hbox").innerHTML = '';
document.getElementById("sbox").innerHTML = '<nedface id="sbox" onclick="sbox()">Show Settings</nedface>';
}

function sbox() {
document.getElementById("inside").innerHTML = document.getElementById("insideText").innerHTML;
document.getElementById("hbox").innerHTML = '<nedface id="hbox" onclick="hbox()">Hide Settings</nedface>';
document.getElementById("sbox").innerHTML = '';
}

function backgroundon() {
document.getElementById("bg").innerHTML = '    <style type="text/css" id="bg">
html, body, bg, background {
  background-image: url("http://enjoycss.com/webshots/hB_1.png");
}
</style>';
document.getElementById("bgenable").innerHTML = '';
document.getElementById("bgdisable").innerHTML = '<nedface id="bgdisable" onclick="backgroundoff()">Disable Background</nedface>';
}

function backgroundoff() {
document.getElementById("bg").innerHTML = '';
document.getElementById("bgenable").innerHTML = '<nedface id="bgenable" onclick="backgroundon()">Enable Background</nedface>';
document.getElementById("bgdisable").innerHTML = '';
}
