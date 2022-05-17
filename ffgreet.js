function Greetings() {
    var greetCounter = 0
    var array = []
    var theName = ""
    var theSurname = ""
    var theLanguage = ""



    function setGreet(name, surname, language){
        array.push( {
            name,
            surname,
            language
        })
    }
    function getGreet() {
        var greetingString = getLanguageGreet() +  ", " + theName + " " + theSurname   
        return greetingString
    }
    function countGreet(){
        greetCounter++
    } 
    function greetedCounter(){
        return greetCounter++
    }
     function displayMessage(){
        return " "
     }
     function setLanguageGreet(language){
        theLanguage = language
     }
     function getLanguageGreet(language, name){
        if(theLanguage === "isiXhosa"){
            return "Molo, " + name 
        }
        if(theLanguage === "English"){
            return "Hello, " + name
        }
        else if(theLanguage === "Afrikaans"){
            return "Hallo, " + name
        }
    }
   
    function codex() {
        return array.length;
    }
    return {
        getGreet,
        setGreet,
        countGreet,
        greetedCounter,
        displayMessage,
        getLanguageGreet,
        setLanguageGreet,
        codex
    }

}
