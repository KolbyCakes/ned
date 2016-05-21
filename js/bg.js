function backgroundon() {
document.getElementById("bg").innerHTML = '<style type="text/css" id="bg"> html, body, bg, background {background-image: url("http://enjoycss.com/webshots/hB_1.png");} </style>';
document.getElementById("bgenable").innerHTML = '';
document.getElementById("bgdisable").innerHTML = '<nedface id="bgdisable" onclick="backgroundoff()">Disable Background</nedface>';
}

function backgroundoff() {
document.getElementById("bg").innerHTML = '';
document.getElementById("bgenable").innerHTML = '<nedface id="bgenable" onclick="backgroundon()">Enable Background</nedface>';
document.getElementById("bgdisable").innerHTML = '';
}
