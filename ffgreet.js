function Greetings() {

    var array = JSON.parse(localStorage.getItem("array")) || [];
    var errorMessage = ""
    var warningMessage = ""
    var greetMessage = ""
    var newArray = []
    const regex = /^[a-z]+$/gi
    //const arrayLength = array.length

  
    function setGreet(name, language){
        
       
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













