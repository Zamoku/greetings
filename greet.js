//Add refrences to select elements
const greetBtn = document.querySelector(".greetBtn");
const nameInput = document.querySelector(".nameInput");
const surnameInput = document.querySelector(".surnameInput")
const languageRadioBtn = document.querySelector(".languageRadioBtn");
const theMessage = document.querySelector(".theMessage");

greetBtn.addEventListener("click",greetings);

const greetInstance = Greetings()

function createGreetElement(){
    var checkedLangRadioBtn = document.querySelector("input[name='language']:checked");
    var languageChecked = checkedLangRadioBtn.value


    //displayed greeting on the screen.
    theMessage.innerHTML = (greetInstance.getGreet());
   


}


































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
//    const greetSurname = document.createElement('p')
//    const greetLanguage = document.createElement('p')

// //    Fill the content
//    greetName.innerHTML = "Hi : " + name;
//    greetSurname.innerHTML =  surname;
//    greetLanguage.innerHTML =  language;

//    //Add to the DOM
//    greetDiv.append(greetName, greetSurname, greetLanguage);
//    theMessage.append(greetDiv)

//    theMessage.style.display = greetData.length === 0 ? "none" : "flex"
// }

// theMessage.style.display = greetData.length === 0 ? "none" : "flex"

// greetData.forEach(createGreetElement)

// //greetBtn.addEventListener("click",function() = (e) => {
//    container.onsubmit = (e) => {
// //greetBtn.addEventListener("click",function(){
//    e.preventDefault();

//    const newGreeting = addGreet(
//         nameInput.value,
//         surnameInput.value,
//         languageRadioBtn.value
//     )

//    createGreetElement(newGreeting)

//     nameInput.value = ""
//     surnameInput.value = ""
//     languageRadioBtn.value = ""

// }


  