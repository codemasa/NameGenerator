const API = require('../APIKey.json');

const language = 'en';
const domains_url = 'https://od-api.oxforddictionaries.com:443/api/v1/domains/' + language;
const API_KEY = API.Key;
const API_ID = API.Id;
const RAPID_API_KEY = API.Rapid_key;
const regex = /^[\w\-\s]+$/;

const XMLHttpRequest = require("../node_modules/xmlhttprequest").XMLHttpRequest;



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

form.addEventListener("click", function(){
  Requests.HttpClient(API_KEY, API_ID, domains_url, function(responseText){
    var response = JSON.parse(responseText);
    var domains = [];
    for(key in response["results"]){
      domains.push(key);
    }
    const random_domain = domains[Math.floor(Math.random()*domains.length)];
    const word_list_url = 'https://od-api.oxforddictionaries.com:443/api/v1/wordlist/' + language + '/lexicalCategory=noun;domains=' + random_domain;
    Requests.HttpClient(API_KEY, API_ID, word_list_url, function(responseText){
      var response = JSON.parse(responseText);
      var words = []
      for(var i=0 ; i<response["results"].length ; i++){
        words.push(response["results"][i]["id"]);
      }
      const random_word = domains[Math.floor(Math.random()*words.length)];
      const word_url =  "https://webknox-words.p.rapidapi.com/words/" + random_word + "/plural";
      console.log(random_word);
      Requests.RapidHttpClient(RAPID_API_KEY, word_url, function(responseText){
        var response = JSON.parse(responseText);
        form.innerHTML = response.plural.replace(/_/g, " ");
      });
    });
  });
});
