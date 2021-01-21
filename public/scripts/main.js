function addToConsole() {
    console.log(document.getElementById('newWord').value);
    console.log('Paul smells of roses and butterflies');
    return false;
};

function addToCookie() {
    // var date = new Date()
    // date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    // var expString = "; expires=" + date.toGMTString();
    document.cookie = "username = " + document.getElementById('newWord').value //+ expString;
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


var x = document.cookie;
document.getElementById("idTest").innerHTML = x.substring(9);
