//Add refrences to select elements
// const greetBtn = document.querySelector(".greetBtn");
// const nameInput = document.querySelector(".nameInput");
// const surnameInput = document.querySelector(".surnameInput")
// const languageRadioBtn = document.querySelector(".languageRadioBtn");
// const theMessage = document.querySelector(".theMessage");





// function createGreetElement(){

//     const greetInstance = createGreetElement()

//     //var greetCounter = 0
//     var greetArray = JSON.parse(localStorage.getItem("greetData")) || []
//     var theName = ""
//     var theSurname = ""
//     var theLanguage = ""

//     function setGreet(name, surname, language){
//         greetArray.push( {
//             name,
//             surname,
//             language
//         })
//         localStorage.setItem("greetArray", JSON.stringify(greetData))
        
//     }
//     function setLanguageGreet(language, name, surname){
//         theLanguage = language
//         theName = name
//         theSurname = surname
     
//      console.log(setLanguageGreet())

    // function getLanguageGreet(){

    //     const greegreetBtn.addEventListener("click",(e) => {
//     e.preventDefault();
//     alert("test")
//   tDiv = document.createElement('div')
    //     const greetName = document.createElement('h2')
    //     const greetSurname = document.createElement('p')
    //     const greetLanguage = document.createElement('p')

    //     var checkedLangRadioBtn = document.querySelector("input[name='language']:checked");
    //     var languageChecked = checkedLangRadioBtn.value

    //     if(languageChecked === "isiXhosa"){
    //         return "Molo, " + theName + " " +  theSurname
    //     }
    //     if(languageChecked === "English"){
    //         return "Hello, " + theName + " " + theSurname
    //     }
    //     else if(languageChecked === "Afrikaans"){
    //         return "Hallo, " + theName + " " + theSurname
    //     }

    //     greetDiv.append(greetName, greetSurname, greetLanguage);
    //     theMessage.append(greetDiv)

    //     theMessage.style.display = greetArray.length === 0 ? "none" : "flex"
    // }
    // greetBtn.addEventListener("click",createGreetElement)
//         theMessage.style.display = greetArray.length === 0 ? "none" : "flex"

//     greetInstance.howManyGreetings() 

//    // greetInstance.getLanguageGreet()

//     //displayed greeting on the screen.
    // theMessage.innerHTML = greetInstance.getLanguageGreet();
    // theMessage.innerHTML = greetInstance.howManyGreetings();

//     greetBtn.addEventListener("click",function(event){
//         event.preventDefault()
//         const newGreeting = setGreet(
//                      theName,
//                      theSurname,
//                      theLanguage
//                  )
            
//                  getLanguageGreet(newGreeting)
            
//                  theName = ""
//                  theSurname = ""
//                  theLanguage = ""
    
    
//     });

//     return{
//         getLanguageGreet,
//         setGreet,
//         howManyGreetings,
//         setLanguageGreet
//     }
//}


// funtion displayMessage(){

        
// }




// //Add refrences to select elements
// const greetBtn = document.querySelector(".greetBtn");
// const container = document.querySelector(".container")
// const greetForm = document.getElementById("greetForm")
// const nameInput = greetForm["nameInput"];
// const surnameInput = greetForm["surnameInput"];
// //const languageRadioBtn = document.querySelector(".languageRadioBtn");
// const output = document.querySelector(".output");
// const theMessage = document.querySelector(".theMessage")
// const languageRadioBtn = greetForm['language'];
// //const container = document.querySelector(".container")

// //greetBtn.addEventListener("click",greetings);

// //store the values in an array
// const greetData = JSON.parse(localStorage.getItem("greetData")) || [];

// //function to add greet data
// const addGreet = (name, surname, language) => {
//    greetData.push({
//        name,
//        surname,
//        language
//    });

//    localStorage.setItem("greetData", JSON.stringify(greetData))

//     return{name, surname, language};

// }

// const createGreetElement = ({name, surname, language}) => {
//    const greetDiv = document.createElement('div')
//    const greetName = document.createElement('h2')
//    //const greetSurname = document.createElement('p')
//    //const greetLanguage = document.createElement('p')

// //    Fill the content

//     // if(languageRadioBtn.value === "isiXhosa"){
//     //     var theLanguge = "Molo"
//     //     theLanguge = language 
//     // }
//     // if(languageRadioBtn.value === "English"){
//     //     var theLanguge = "Hello"
//     //     theLanguge = language 
          
//     //      }
//     //        else if(languageRadioBtn.value === "Afrikaans"){
//     //         var theLanguge = "Hallo"
//     //         theLanguge = language 
//     //     }
    
//     greetName.innerHTML = theLanguage + name + " "+ surname + " " ;
//   // greetSurname.innerHTML =  surname;
//   // greetLanguage.innerHTML =  language;

//    //Add to the DOM
//    greetDiv.append(greetName);
//    theMessage.append(greetDiv)

//    theMessage.style.display = greetData.length === 0 ? "none" : "flex"
// }

// theMessage.style.display = greetData.length === 0 ? "none" : "flex"

// greetData.forEach(createGreetElement)

// greetBtn.onsubmit = (e) => {
  
//     e.preventDefault();
 
//     const newGreeting = addGreet(
//          nameInput.value,
//          surnameInput.value,
//          languageRadioBtn.value
//      )
 
//     createGreetElement(newGreeting)
 
//      nameInput.value = ""
//      surnameInput.value = ""
//      languageRadioBtn.value = ""

// }

//Add refrences to select elements
const greetBtn = document.querySelector(".greetBtn");
const container = document.querySelector(".container")
const greetForm = document.getElementById("greetForm")
const nameInput = greetForm["nameInput"];
const surnameInput = greetForm["surnameInput"];
const langRadioBtn = document.querySelector(".languageRadioBtn");
const output = document.querySelector(".output");
const theMessage = document.querySelector(".theMessage")
const languageRadioBtn = greetForm['language'];
//const container = document.querySelector(".container")

//console.log(languageRadioBtn[1].value)
//store the values in an array
const greetData = JSON.parse(localStorage.getItem("greetData")) || [];

//function to add greet data
const addGreet = (name, surname, language) => {
   greetData.push({
       name,
       surname,
       language
   });

   localStorage.setItem("greetData", JSON.stringify(greetData))

    return{name, surname, language};

    
}

const createGreetElement = ({name, surname, language}) => {
   const greetDiv = document.createElement('div')
   const greetName = document.createElement('h2')
   const greetSurname = document.createElement('p')
   const greetLanguage = document.createElement('p')



   var checkedLang = ""

   for (let i = 0; i < languageRadioBtn.length; i++) {
            //console.log(languageRadioBtn[length])

        if(languageRadioBtn.value === "isiXhosa"){
            checkedLang = "Molo"
        }
        if(languageRadioBtn.value === "English"){
            checkedLang = "Hello"
                     }
       else if(languageRadioBtn.value === "Afrikaans"){
            checkedLang = "Hallo"
                    
             }
   }

//    Fill the content
   greetName.innerHTML = checkedLang + ", " + name + " "+ surname;
   

   const myTimeout = setTimeout(myGreet, 5000);

   function myGreet() {
     document.querySelector(".theMessage").innerHTML = " "
   }
//    greetSurname.innerHTML =  surname;
//    greetLanguage.innerHTML =  language;

   //Add to the DOM
   greetDiv.append(greetName, greetSurname, greetLanguage);
   theMessage.append(greetDiv)

   theMessage.style.display = greetData.length === 0 ? "none" : "flex"
}

    theMessage.style.display = greetData.length === 0 ? "none" : "flex"

    greetData.forEach(createGreetElement)

    



//greetBtn.addEventListener("click",function() = (e) => {
  // container.onsubmit = (e) => {
    greetForm.onsubmit = (e) => {
        e.preventDefault();
   const newGreeting = addGreet(
        nameInput.value,
        surnameInput.value,
        languageRadioBtn.value
    )

   createGreetElement(newGreeting)

    nameInput.value = ""
    surnameInput.value = ""
    languageRadioBtn.value = ""

    localStorage.clear();

}

// document.getElementById("clear").onclick = clear_me;

// function clear_me() {
//     localStorage.clear();
//     checkStorage();
// }






  