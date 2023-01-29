let question = document.querySelector("#questionText");
let html = question.innerHTML;
question.innerHTML = "Name the 8 energy stores."
let answer
window.addEventListener('load',()=>{
    answer = document.querySelector("#answerText")

    form.addEventListener("submit",(event)=>{
        
        event.preventDefault() 
        answer.innerHTML = "Kinetic, chemical, thermal, gravitational potential, electrostatic, magnetic, nuclear, elastic potential."
        })
    })