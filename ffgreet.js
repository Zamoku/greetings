function Greetings() {

    // var newArray = JSON.parse(localStorage.getItem("newArray")) || [];
    var newArray = [];
    var errorMessage = ""
    var warningMessage = ""
    var greetMessage = ""
    var stringName
    var action
    //var newArray = []
    const regex = /^[a-z]+$/gi
    //const arrayLength = array.length
    
    function setGreet(name) {
        if (!newArray.includes(name)) {
            //stringName = name.trim();
            newArray.push(
                name
            )

            //localStorage.setItem("newArray", JSON.stringify(newArray))
        }else{
                warningMessage = "You have already added the name"
        }
        return warningMessage
    }
    
    function setGreetMessage(name, language) {
        

        if (language === "isiXhosa") {
            greetMessage = "Molo, " + name
        }
        if (language === "English") {
            greetMessage = "Hello, " + name
        }
        else if (language === "Afrikaans") {
            greetMessage = "Hallo, " + name
        }
        
        return greetMessage
    }
    function getGreetMessage() {
        return greetMessage
    }
    function getCounter() {
        //getGreet()
        return newArray.length
    }
    function checkEmptyName(name) {
        //console.log(name.length)
        if (name.length === 0 ) {
            warningMessage = "Please enter the name";
            
        }
        return warningMessage
    }
    function checkName(name) {
        if (!regex.test(name)) {
            errorMessage = "Please enter the correct name";
        }
        return errorMessage
    }
    function checkLanguagechecked(language) {
        if (language === "") {
            warningMessage = "Please select language";
        }
        return warningMessage
    }
    function getCheckLanguagechecked(){
        warningMessage
    }
    function getCheckName() {
        errorMessage
    }
    function getGreet() {
        return newArray;
    }
    function checkForDuplicate(name) {

        if (getGreet().includes(name) ) {
            warningMessage = "You have already added the name"
        
         }else{
            setGreet(name)
         }
        return warningMessage
    }

    return {
        checkName,
        getCheckName,
        setGreet,
        getGreet,
        checkEmptyName,
        setGreetMessage,
        getGreetMessage,
        getCounter,
        checkForDuplicate,
        checkLanguagechecked,
        getCheckLanguagechecked

    }
}






//     if(!array.includes(name) && name !== ""){
//         array.push(
//             name
//         )
//         localStorage.setItem("array", JSON.stringify(array))
//     }  

// }
// // function checkLanguagechecked(){
// //     return 'Please select language'
// // }
// function getErrorMessage(name,language){



//     if(array.includes(name)) {
//         errorMessage = "You have already added the name";
//     } 

//     //  if(!language.checked){
//     //     errorMessage = "Please select language";
//     //  }

//     return errorMessage
// }

// function getWarning(name){


//     if(name === ""){
//         warningMessage = "Please enter name"
//         greetMessage = "";
//     }
//     else if(name.match(regex && name !== "" )){
//         warningMessage = "Please enter the correct name";

// }
//     return warningMessage
// }
// function getGreet(name,language) {

//     if(language === "isiXhosa"){
//         greetMessage = "Molo, " + name 
//     }
//      if(language === "English"){
//         greetMessage = "Hello, " + name 
//     }
//      else if(language === "Afrikaans"){
//         greetMessage = "Hallo, " + name 
//     }
//     return greetMessage
// }
//  function countGreet(){
//     return array.length
// } 


// return {
//     setGreet,
//     countGreet,
//     getGreet,
//     getErrorMessage,
//    // checkLanguagechecked,
//     getWarning

// }   



