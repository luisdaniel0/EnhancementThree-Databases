/**
 * Programmer: Luis Sanchez
 * Contact: luisanchezdh@gmail.com
 * Date: 10/12/2024
 * Version: 1.0
 * Purpose: This JavaScript file implements a Trivia App that quizzes users on various albums by artists. The app uses a MySQL database to store the questions. The application allows users to play a trivia game and displays questions, answers, and scores based on user responses.
 * Issues: An improvement is needed to fetch all questions stored in a MySQL database store.
 */

let pos = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC, chD;
let playNowBtn = document.querySelector(".playNow");
let restartBtn = document.querySelector(".restart");
let questionImg = document.querySelector(".questionImg");
let questionContainer = document.querySelector(".questionContainer")
let test_ = document.querySelector(".test_");
let test_stat = document.querySelector(".test_stat");
let rules = document.querySelector(".rules");

let questions = []; // Initialize as an empty array

function get(x) {
  return document.getElementById(x);
}

// Fetch questions from the server
async function fetchQuestions() {
  try {
    const response = await fetch('http://localhost:3000/questions'); //fetch from  server
; 
    questions = await response.json(); // Store the fetched questions in the questions array
    renderQuestion(); // Call renderQuestion after fetching
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

// Function to render the current question to the UI
function renderQuestion() {
  playNowBtn.addEventListener("click", (event) => {
    event.preventDefault();
    playNowBtn.classList.add("hide");
    rules.classList.add("hide");
    questionContainer.classList.remove("hide");
    questionImg.classList.remove("hide");
    test_.classList.remove("hide");
    test_stat.classList.remove("hide");
    restartBtn.classList.remove("hide");
    renderQuestion();
  });

  test = get("test");

  // If all questions have been answered, show the score and reset
  if (pos >= questions.length) {
    playNowBtn.classList.add("hidden");

    console.log('hello');
    // Display the final score
    test.innerHTML = "<h2>You got a score of " + correct + "/100 </h2>";

    get("test_status").innerHTML = "Test completed";

    pos = 0; // Reset question position for potential restart

    return false;
  }

  // Display the current question number and total questions
  get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

  // Get the current question and choices from the questions array
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;

  questionImg.src = questions[pos].img;

  // Display the question and answer choices as radio buttons
  test.innerHTML = "<h3>" + question + "</h3>";

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> " + chD + "</label><br><br>";
  test.innerHTML += "<button class='submit answer button' onclick='checkAnswer()'>Submit Answer</button>";
}

// Function to check if the selected answer is correct
function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }

  // Check if the selected choice matches the correct answer
  if (choice == questions[pos].answer) {
    correct = correct + 10;
  }
  pos++;

  renderQuestion();

  restartBtn.addEventListener("submit", (e) => {
  });
}

window.addEventListener("load", fetchQuestions); // Fetch questions on load
