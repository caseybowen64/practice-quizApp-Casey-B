


//Our quiz quesiton class
class QuizQuestion {
    constructor(questionText, choicesArray, answerIndex) {
        this.questionText = questionText;
        this.choicesArray = choicesArray;
        this.answerIndex = answerIndex;
    }
}


let quizArray = [];
quizArray.push(new QuizQuestion("Which beetle is best?", ["Dung", "June", "Rhino", "Speckled"], 2))
quizArray.push(new QuizQuestion("Which beetle is worst?", ["Dung", "June", "Rhino", "Speckled"], 1))
quizArray.push(new QuizQuestion("Which beetle is the nicest?", ["Dung", "June", "Rhino", "Speckled"], 3))
quizArray.push(new QuizQuestion("Which beetle is the meanest?", ["Dung", "June", "Rhino", "Speckled"], 0))
quizArray.push(new QuizQuestion("Which beetle is the most expensive?", ["Dung", "June", "Rhino", "Speckled"], 2))

// console.log(quizArray)

let ansList = [document.getElementById("ans-1"), 
               document.getElementById("ans-2"), 
               document.getElementById("ans-3"), 
               document.getElementById("ans-4")]

// console.log(ansList)

let nextButton = document.getElementById("Next");
//to identify which question we are on
let questionNumberCounter = 0;
//getting the HTML object of the question Text
let questionTextObj = document.getElementById("question-text")
//a boolean to tell us if they should be able to click on the answers or not.
let canClickAns = true


function displayQuestion(questionObj) {
    questionTextObj.textContent = questionObj.questionText
    // console.log(questionObj)
    for (let [choiceIndex, choice] of questionObj.choicesArray.entries()) {
        ansList[choiceIndex].textContent = choice;
    }
}

displayQuestion(quizArray[questionNumberCounter]) //displaying the first round of questions. We may want to remove this later

//adding the event listeners to all the answers. References the handle answer click function. 
for (const [answerIndex, ansButton] of ansList.entries()) {
        ansButton.addEventListener("click", handleAnswerClick);
    }


function handleAnswerClick(event) {
    const thisAns = event.target //getting the html object that was clicked and assigning a variable
    const choiceIdx = thisAns.id.split('-')[1]-1 //getting the number associated with what was clicked 
    // alert(choiceIdx)
    const currentQuestion = quizArray[questionNumberCounter] //identifies the current question we are on as a total object
    const correctIdx = currentQuestion.answerIndex //gets the answer index from the current question object
    console.log(typeof choiceIdx, typeof correctIdx, typeof currentQuestion, choiceIdx, correctIdx) //checks the types we are working with

    if (choiceIdx === correctIdx){ //if the choice is the same as the correct ID alert this.
        // alert("Correct!")
        console.log("Correct");
    }
    else {
        const correctAnswer = currentQuestion.choicesArray[correctIdx]
        //alert("Wrong! The correct answer is: " + currentQuestion.choicesArray[correctIdx]); //if the choice isn't the same as the ID alert this.
        console.log("Incorect");
    }
    
    console.log("Done with alerts");
    //remove event listeners from all the answers
    for (const [answerIndex, ansButton] of ansList.entries()) {
        console.log(ansButton.id);
        ansButton.removeEventListener("click", handleAnswerClick);
    }

    nextButton.addEventListener("click", handleNextClick);
}

//function to handle what happens when you click Next
//when you click next, we want to move to the next question, up the counter, and then disable the event listener for 
function handleNextClick(event){
    questionNumberCounter= questionNumberCounter+1;
    if (questionNumberCounter > ansList.length) {
        questionNumberCounter = 0;
    }
    else {}
    const currentQuestion = quizArray[questionNumberCounter];
    console.log(currentQuestion, questionNumberCounter);
    displayQuestion(currentQuestion);
    
    nextButton.removeEventListener("click", handleNextClick);

    for (let [answerIndex, ansButton] of ansList.entries()) {
        ansButton.addEventListener("click", handleAnswerClick);
    }


}





//Now we know - which button is being clicked and the right answer.
//We need to then - give the right response and then disable all the buttons.
//Enable the next button. Then when that's clicked, we disable the next button and enable other buttons.
//By disabling do we want a dead click or an alert that tells the user to press next?
//When the end of the quiz is reached, do we loop back around to the first question?
//



