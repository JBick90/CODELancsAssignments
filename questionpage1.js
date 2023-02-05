//         subChapter: "",
//         subQuestion: ,
//         difficulty: ,
//         questionText: "",
//         answerA: "",
//         answerB: "",
//         answerC: "",
//         answerD: "",
//         correctAnswer: ""
let questionBank = [
    {
        subChapter: "1.1.1",
        subQuestion: 1,
        difficulty: 3,
        questionText: "Which of these is not an energy store?",
        answerA: "Kinetic energy",
        answerB: "Electrical energy",
        answerC: "Nuclear energy",
        answerD: "Chemical energy",
        correctAnswer: "B"
    },
    {
        subChapter: "1.1.1",
        subQuestion: 2,
        difficulty: 3,
        questionText: "Which of these is not an energy store?",
        answerA: "Kinetic energy",
        answerB: "Elastic energy",
        answerC: "Thermal energy",
        answerD: "Sound energy",
        correctAnswer: "D"
    },
    {
         subChapter: "1.1.2",
         subQuestion: 1,
         difficulty: 3,
         questionText: "Which of these is the equation for kinetic energy?",
         answerA: "½mv²",
         answerB: "mgh",
         answerC: "½ke²",
         answerD: "mcΔθ",
         correctAnswer: "A"
    }
]
let myForm = document.getElementById("myForm");
  
window.onload=function(){
   
  
    myForm.addEventListener("submit",(event)=>{
        
        event.preventDefault();                                 //Stops the page refreshing when you press submit
        specPoint = document.querySelector("#specPoint").value  //Takes the value in the text input from the html
        console.log(specPoint)                                  //Prints the value, just to check it's working
        const filterArrayOfObjects = (array, key, value) =>     //Defines a new constant using a function (arrow method)
        array.filter(object => object[key] === value);          //This is the function. It filters a given array use a key and a value.


        const filteredArray = filterArrayOfObjects(questionBank, "subChapter", specPoint);    //This this takes the predefined constant, which is a function, where the parameters are now defined.

        console.log(filteredArray);                             //Prints the new, filtered array and IT FINALLY WORKED

        const selectRandomObject = array => array[Math.floor(Math.random() * array.length)];
        const randomObject = selectRandomObject(filteredArray);

        const questionElement = document.getElementById("questionText");
        questionElement.innerHTML = randomObject.questionText;

        const answerAElement = document.getElementById("answerA");
        answerAElement.innerHTML = randomObject.answerA;

        const answerBElement = document.getElementById("answerB");
        answerBElement.innerHTML = randomObject.answerB;

        const answerCElement = document.getElementById("answerC");
        answerCElement.innerHTML = randomObject.answerC;

        const answerDElement = document.getElementById("answerD");
        answerDElement.innerHTML = randomObject.answerD;

        const container = document.getElementById("container");
        if (container) {
            if (container.childNodes.length === 0) {
        const label = document.createElement("label");
        label.innerHTML = "My Answer:";
        container.appendChild(label);

        const input = document.createElement("input");
        input.type = "text";
        input.className = "w-100 border border-black rounded-lg ps-1";
        container.appendChild(input);

        const button = document.createElement("button");
        button.innerHTML = "Submit";
        button.className = "bg-cyan-500 p-1.5 text-gray-50 rounded-lg";
        container.appendChild(button);
        }}
})
}
