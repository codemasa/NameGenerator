const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function HttpClient(app_key, app_id, theUrl, callback)
{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader("app_key", app_key);
    xmlHttp.setRequestHeader("app_id", app_id);
    xmlHttp.send(null);
}
function RapidHttpClient(app_key, theUrl, callback)
{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader("X-RapidAPI-Key", app_key);

    xmlHttp.send(null);
}

module.exports.HttpClient = HttpClient;
module.exports.RapidHttpClient = RapidHttpClient;
