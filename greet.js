//Add refrences to select elements
const greetBtn = document.querySelector(".greetBtn");
//const nameInput = document.querySelector(".nameInput");
const counterGreet = document.querySelector(".output")
const theMessage = document.querySelector(".theMessage");
const warningMessage = document.querySelector(".warningMessage");
const errorMessage = document.querySelector(".errorMessage")
const surnameInput = greetForm['surnameInput']
const nameInput = greetForm['nameInput']

 
const greetInstance = Greetings()


greetBtn.addEventListener("click",function(event){
    event.preventDefault()


    const languageRadioBtn = document.querySelector("input[name='language']:checked");

    //greetInstance.testRegex()

    greetInstance.setGreet(nameInput.value,languageRadioBtn.value)

    
   theMessage.innerHTML = greetInstance.getGreet();
   errorMessage.innerHTML = greetInstance.getDuplicate();
   warningMessage.innerHTML = greetInstance.getWarning();
   counterGreet.innerHTML = greetInstance.countGreet();

   const myTimeout = setTimeout(myGreeting, 2000);

    function myGreeting() {
    theMessage.innerHTML = " ";
  }
  const errorTimeout = setTimeout(myErrorGreeting, 1000);

    function myErrorGreeting() {
    errorMessage.innerHTML = " "
  }
  const warningTimeout = setTimeout(myWarningGreeting, 2200);

    function myWarningGreeting() {
    warningMessage.innerHTML = " "
  }
 
})
counterGreet.innerHTML = greetInstance.countGreet();




     

      