//Add refrences to select elements
const greetBtn = document.querySelector(".greetBtn");
const clearBtn = document.getElementById("clear");
//const nameInput = document.querySelector(".nameInput");
const counterGreet = document.querySelector(".output")
const theMessage = document.querySelector(".theMessage");
const warningMessage = document.querySelector(".warningMessage");
const errorMessage = document.querySelector(".errorMessage")
const surnameInput = greetForm['surnameInput']
const nameInput = greetForm['nameInput']
let language = ''



const greetInstance = Greetings()

var greetArray = JSON.parse(localStorage.getItem("greetArray")) || greetInstance.getGreet()

greetBtn.addEventListener("click",function(event){
  event.preventDefault()
  

  let checkedBtn = document.querySelectorAll("input[name='language']");
  if(!checkedBtn[0].checked && !checkedBtn[1].checked&& !checkedBtn[2].checked){
   warningMessage.innerHTML = greetInstance.checkLanguagechecked(checkedBtn);
  }
  
  // let languageRadioBtn = document.querySelector("input[name='language']:checked");
  // console.log(languageRadioBtn.value)
  // if(languageRadioBtn[0].checked ){
   
  // }

  for (let i = 0; i < checkedBtn.length; i++) {
     if(checkedBtn[i].checked){
          language = checkedBtn[i].value
     }
    }
    if(language == ""){

      warningMessage.innerHTML = greetInstance.checkLanguagechecked(language);
    }
  if(nameInput.value.length === 0){
    warningMessage.innerHTML = greetInstance.checkEmptyName(nameInput.value);
    theMessage.innerHTML = " ";
  }else{
  
  theMessage.innerHTML = greetInstance.setGreetMessage(nameInput.value,language);
  
  }
 
  
  if(greetArray.includes(nameInput.value)){
    warningMessage.innerHTML = greetInstance.setGreet(nameInput.value);
  }

  // if(greetInstance.checkName(nameInput.value)) {
  //   errorMessage.innerHTML = greetInstance.checkName(nameInput.value);
  //   theMessage.innerHTML = " ";
  // }
  greetInstance.setGreet(nameInput.value)
  theMessage.innerHTML = greetInstance.setGreetMessage(nameInput.value,language);
  localStorage.setItem("greetArray", JSON.stringify(greetArray))
  counterGreet.innerHTML = greetArray.length;
    // if(greetInstance.checkForDuplicate(nameInput.value)){
    //    warningMessage.innerHTML = greetInstance.checkForDuplicate(nameInput.value);
    //    theMessage.innerHTML = " "
    //  }
    // theMessage.innerHTML = " "

   //errorMessage.innerHTML = greetInstance.setGreet(nameInput.value);
   


  //  if(greetArray.length === 0){
    
    //  }
    // if(languageRadioBtn[0].checked === "English"){
      //   theMessage.innerHTML =  languageRadioBtn.value = "Hello"
      // }else{
        // }
        
        //if(languageRadioBtn.checked === false){
          //var checkedRadioBtn = languageRadioBtn.value
          //greetInstance.setGreetMessage(nameInput.value,languageRadioBtn.value)
          
          
          //  }
          //  else{
            //   warningMessage.innerHTML = greetInstance.checkLanguagechecked(languageRadioBtn.value);
            //  }
            
            
   

   const myTimeout = setTimeout(myGreeting, 2000);

    function myGreeting() {
    theMessage.innerHTML = " ";
  }
  const errorTimeout = setTimeout(myErrorGreeting, 3000);

    function myErrorGreeting() {
    errorMessage.innerHTML = " "
  }
  const warningTimeout = setTimeout(myWarningGreeting, 2200);

    function myWarningGreeting() {
    warningMessage.innerHTML = " "
  }
  
})

clearBtn.addEventListener("click",function(event){
   event.preventDefault()

  localStorage.clear();
   location.reload()
  
})

counterGreet.innerHTML = greetArray.length;


 // array.push({
        //     name,
        //     language
        // })
       
        // if(!language.checked){
        //     warningMessage = "Please select your language of choice"
        // }

     

      