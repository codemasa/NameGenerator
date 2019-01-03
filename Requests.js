const API = require('./APIKey.json');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const language = 'en';
const domains_url = 'https://od-api.oxforddictionaries.com:443/api/v1/domains/' + language;
const word_list_url = 'https://od-api.oxforddictionaries.com:443/api/v1/wordlist/' + language + '/lexicalCategory=noun;domains=sport';
const API_KEY = API.Key;
const API_ID = API.Id;

var domains = {};
var word = {
    'word': '',

}
function HttpClient(theUrl, callback)
{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader("app_key", API_KEY);
    xmlHttp.setRequestHeader("app_id", API_ID);
    xmlHttp.send(null);
}

HttpClient(domains_url, function(response){
  domains = response;
  console.log(domains);

});
