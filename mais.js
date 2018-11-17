var str = "textarea-container";
function bold() {
    document.getElementById(str).classList.toggle("textbold")
}
function italic() {
    document.getElementById(str).classList.toggle("textitalic")
}
function underline() {
    document.getElementById(str).classList.toggle("textunderline")
}
function fontstyle() {
    var x = document.getElementById("fontstyle");
    var strUser = x.value;
    document.getElementById(str).style.fontFamily = strUser;
}
function fontsize() {
    var e = document.getElementById("fontsize");
    var strUser = e.value;
    document.getElementById(str).style.fontSize = strUser ;
}





