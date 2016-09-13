function Button(name, url, type, img) {
    name0 = name.charAt(0);
    name1 = name0.toUpperCase();
    name2 = name.replace(name0, name1);
    document.write('<!--' + name +'-->')
    document.write('    <a class="oldbutton" href="http://' + url + '">' + name2);
    document.write('<br>');
    
    if (!window.location.href.includes("nocat=true")) {
        document.write('       <small class="extra2">' + type + '</small><br>');
    }
    
    if (!window.location.href.includes("noimg=true")) {
        document.write('        <img src="http://' + img + '" alt="' + name2 + '" width="88" height="75">');
    }
    
    document.write('    </a> &nbsp;');
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
function DNedTool(name, img) {
    // If the name of the nedtool is the same as the part after nedhome.ml/tools/ then use this
    NedTool(name, "nedhome.ml/tools/" + name.toLowerCase(), img)
}
function OutherSite(name, url, img) {
    Button(name, url, "Outher Site", img)
}
function SocialMedia(name, url, img) {
    Button(name, url, "Social Media", img);
}
function Kids(name, url, img) {
    Button(name, url, "For Kids", img);
}
function Email(name, url, img) {
    Button(name, url, "Email", img);
}
function NewLine(type) {
    if(type == "p") {
        document.write("</p>")
    } else if(type == "br") {
        document.write("<br>")
    } else if(type == null || type == "") {
        document.write("<br>")
    }
}

