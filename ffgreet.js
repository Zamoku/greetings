function Greetings() {

  
    var array = JSON.parse(localStorage.getItem("array")) || [];
    var greetMessage = ""
    var errorMessage = ""
    var warningMessage = ""
    var newArray = []


    function setGreet(name, language){
        
        // array.push({
        //     name,
        //     language
        // })
     
        if(!array.includes(name) && name !== ""){
            array.push(
                name
            )
        } else if(array.includes(name)) {
            errorMessage = "You have already added the name" 
            warningMessage = ""
            greetMessage = " "
        }
       
        localStorage.setItem("array", JSON.stringify(array))
        
     //}
    // function setGreetMessage(name, surname, language){
       
        if(language === "isiXhosa"){
            greetMessage = "Molo, " + name 
        }
        if(language === "English"){
            greetMessage = "Hello, " + name 
        }
         if(language === "Afrikaans"){
            greetMessage = "Hallo, " + name 
        }
         if(language === null){
            errorMessage = "Please select your language of choice"
        }
        else if(name === ""){
            warningMessage = "Please enter name"
             greetMessage = " "
             errorMessage = " "
             
        }
        
       
       
    }
    
    function getGreet() {
        return greetMessage
    }
    function getDuplicate(){
        //write/set duplicate function so that you use the duplicate funtion for count also.
        return errorMessage
    }
    function getWarning(){
        return warningMessage
    }
     function countGreet(){
         //an if statement is needed to check for duplicates so that no list is added or pushed.
        return array.length
     } 
     
    function howManyGreetings() {
        return newArray;
        
    }
    // function test(){
    //     return getLanguageGreet()
    // }
    return {
        setGreet,
        countGreet,
        howManyGreetings,
        getGreet,
        getDuplicate,
        getWarning
       // setDuplicate
    }

}
//var greeting = Greetings()
//greeting.countGreet()
//greeting.countGreet()
//console.log(greeting.howManyGreetings())
// greeting.setGreet("Nomzamo","Muleka","isiXhosa")
// greeting.setGreet("Nomfundo","Mjoli","English")
// greeting.setGreet("Nomfundo","Mjoli","English")
// greeting.setDuplicate("Nomfundo")
// greeting.setDuplicate("Nomzamo")
//greeting.setDuplicate("Nomzamo")
//greeting.setGreet("Nomzamo","Muleka","isiXhosa")
// console.log(greeting.howManyGreetings())
// console.log(greeting.getDuplicate())
// console.log(greeting.countGreet())



