
    const quiz = [
      {
        question: "Existence is?", 
        answers: [
          {text: "Cake", score: 1},
          {text: "An Accident", score: 2},
          {text: "A Playground", score: 3},
          {text: "Suffering", score: 4},
        ]
      },
      {
        question: "Suffering Arises From?", 
        answers: [
          {text: "The Malice of Others", score: 1},
          {text: "Accidents", score: 2},
          {text: "Desire", score: 3},
          {text: "Attachment", score: 4},
        ]
      },
      {
        question: "Is it Possible To End Suffering?", 
        answers: [
          {text: "If You Eat The Cake", score: 1},
          {text: "It Could Be", score: 2},
          {text: "No", score: 3},
          {text: "Yes", score: 4},
        ]
      },
      {
        question: "How Does One Let Go Of Craving And Attachment?", 
        answers: [
          {text: "By Opening Their Fist", score: 1},
          {text: "They Can't", score: 2},
          {text: "By Following The Geese", score: 3},
          {text: "By Following The Eightfold Path", score: 4},
        ]
      },
        ]

    let currentQuestion = 0;
    let totalScore = 0;

    const questionText = 
    document.getElementById("question-text");
    const answersContainer = 
    document.getElementById("answers");
    const resultImg = 
    document.getElementById("resultImg");

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

            if(totalScore >= 16){
              resultImg.src= "images/Enzu4Placeholder.png";
            } else if(totalScore < 16 && totalScore >= 13) {
                resultImg.src= "images/Enzu3Placeholder.png";
            }
                else if (totalScore < 13 && totalScore >= 8) {
                resultImg.src= "images/Enzu2Placeholder.png";

            }
                else if (totalScore < 8) {
                    resultImg.src= "images/Enzu1Placeholder.png";
                }
            }

      loadQuestion();    
