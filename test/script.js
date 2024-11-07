const quizData = [
    {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Lisbon",
      correct: "c"
    },
    {
      question: "Which language is used for web development?",
      a: "Python",
      b: "Java",
      c: "JavaScript",
      d: "C++",
      correct: "c"
    },
    {
      question: "Who is the President of the United States in 2023?",
      a: "Donald Trump",
      b: "Joe Biden",
      c: "Barack Obama",
      d: "George Bush",
      correct: "b"
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  let answers = Array(quizData.length).fill(null); // Array to store answers
  
  const quiz = document.getElementById("quiz");
  const questionEl = document.getElementById("question");
  const answerEls = document.querySelectorAll(".answer");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  
    if (answers[currentQuiz] !== null) {
      document.getElementById(answers[currentQuiz]).checked = true;
    }
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function saveAnswer() {
    const answer = getSelected();
    if (answer) {
      answers[currentQuiz] = answer;
    }
  }
  
  function nextQuestion() {
    saveAnswer();
    if (currentQuiz < quizData.length - 1) {
      currentQuiz++;
      loadQuiz();
    }
  }
  
  function prevQuestion() {
    saveAnswer();
    if (currentQuiz > 0) {
      currentQuiz--;
      loadQuiz();
    }
  }
  
  function submitQuiz() {
    saveAnswer();
    score = answers.filter((answer, index) => answer === quizData[index].correct).length;
    quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button onclick="location.reload()">Final Submit</button>`;
  }
  