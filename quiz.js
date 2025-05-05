
    const quiz = [
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
      {
        question: "Where does your soul go when you let it leave you?", 
        answers: [
          {text: "The Mountain", score: 1},
          {text: "The Grassland", score: 2},
          {text: "The Desert", score: 3},
          {text: "The Ocean", score: 4},
        ]
      },
    ];

    let currentQuestion = 0;
    let totalScore = 0;

    const questionText = 
    document.getElementById("question-text");
    const answersContainer = 
    document.getElementById("answers");
    const resultImg = 
    document.getElementById("result-img");

    function loadQuestion() {
      const q = quiz[currentQuestion];
        questionText.textContent = q.question;
        answersContainer.innerHTML= "";

        q.answers.forEach(answer => {
          const btn = document.createElement("button");
          btn.textContent = answer.text; 
          btn.className = "answer";
          btn.onclick = () => { 
              totalScore += answer.score; 
              currentQuestion++;
              if (currentQuestion < quiz.length) {
                  loadQuestion();
              } else {
                  showResult();
              }
            }; 
              answersContainer.appendChild(btn);
          });
        }
        
        function showResult(){
            document.getElementById("quiz-box").style.display= "none";
            resultImg.style.display="block";

            if(totalScore === 2){
              resultImg.src= "images/mountain.png";
            } else if (totalScore === 1) {
                resultImg.src= "images/ocean.png";

            }
            }

      loadQuestion();    
