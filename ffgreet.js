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
    // function getGreet() {
    //     var greetingString = getLanguageGreet() +  ", " + theName + " " + theSurname   
    //     return greetingString
    // }
    function countGreet(){
        greetCounter++
    } 
    function greetedCounter(){
        return greetCounter++
    }
     function displayMessage(){
        return " "
     }
     function setLanguageGreet(language, name, surname){
        theLanguage = language
        theName = name
        theSurname = surname
     }
     function getLanguageGreet(){
        if(theLanguage === "isiXhosa"){
            return "Molo, " + theName + " " + theSurname
        }
        if(theLanguage === "English"){
            return "Hello, " + theName + " " + theSurname
        }
        else if(theLanguage === "Afrikaans"){
            return "Hallo, " + theName + " " + theSurname
        }
    }
   
    function howManyGreetings() {
        return array.length;
    }
    function test(){
        return getLanguageGreet()
    }
    return {
        setGreet,
        countGreet,
        greetedCounter,
        displayMessage,
        getLanguageGreet,
        setLanguageGreet,
        howManyGreetings,
        test
    }

}
