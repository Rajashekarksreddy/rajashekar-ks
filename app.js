var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
 var outputDiv = document.querySelector("#output");

 var server url =https://api.funtranslations.com/translate/minion.json"

 function get translation url (input) {
     return server url + "?" +"text" = + input
 }

 function console handler (Error) {

    console.log ("error occured", Error);
 
 alert ("something wrong with server! "try again after sometime" )

 }
 

// btnTranslate.addEventListener("click",function clickEventHandler() {
//     console.log("clicked!")
// })
function clickhandler() {
 var input text =  txtInput.value;

 fetch (get translation URL (input text)
 .then (Response =>response .json)};
 .then (json => {
     var translated text = json.contents.translated;
     outputDiv.innertext =translated text;
    
 })
 .catch (error handler)};

    btnTranslate.addEventListener("click", clickhandler)