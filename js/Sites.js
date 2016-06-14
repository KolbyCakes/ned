function Button(name, url, type, img) {
    document.write('<a class="oldbutton" href="http://' + url + '">' + name + '<br>');
    document.write('<small class="extra2">' + type + '</small><br>');
    document.write('<img src="http://' + img + '" alt="' + name + '" width="90" height="90">');
    document.write('</a> &nbsp;');
}
function NedGames() {
    Button("NedGames", "games.nedhome.ml", "NedGames", "nedhome.ml/imgs/games.png");
}
function B(name, url, type, img) {
    Button(name, url, type, img);
}
function NedTool(name, url, img) {
    Button(name, url, "NedTool", img)
}
function OutherSite(name, url, img) {
    Button(name, url, "Outher Site", img)
}