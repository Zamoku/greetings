function Greetings() {

    var array = JSON.parse(localStorage.getItem("array")) || [];
    var errorMessage = ""
    var warningMessage = ""
    var greetMessage = ""
    var newArray = []
    const regex = /^[a-z]+$/gi
    //const arrayLength = array.length

  
    function setGreet(name, language){
        
        // array.push({
        //     name,
        //     language
        // })
       
        // if(!language.checked){
        //     warningMessage = "Please select your language of choice"
        // }
        if(!array.includes(name) && name !== "" && language.checked){
            array.push(
                name
            )  
        } else if(name === ""){
            warningMessage = "Please enter name"
            greetMessage = ""
        }
        else if(language.checked){
            warningMessage = "Please select your language of choice"
        }
        
          else if(array.includes(name) && name !== "") {
            errorMessage = "You have already added the name" 
            
        }
        else if(!name.match(regex && name !== "")){
            errorMessage = "Please enter the correct name"

        }
       
       
        
     //}
    // function setGreetMessage(name, surname, language){
       
        if(language === "isiXhosa"){
            greetMessage = "Molo, " + name 
        }
         if(language === "English"){
            greetMessage = "Hello, " + name 
        }
         else if(language === "Afrikaans"){
            greetMessage = "Hallo, " + name 
        }

        localStorage.setItem("array", JSON.stringify(array))
    }
    
    
    function getGreet() {
        return greetMessage
    }
    function getDuplicate(){
        return errorMessage
    }
    function getWarning(){
        return warningMessage
    }
     function countGreet(){
        return array.length
     } 
     
   
    return {
        setGreet,
        countGreet,
        getGreet,
        getDuplicate,
        getWarning
      
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












