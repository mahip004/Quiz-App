let questions =[
   { 
    question:"What is the name of first president of India ?",
    answers:[
        { text: "Jawaharlal Nehru", correct: false},
        { text : "Dr.Rajendra Prasad", correct: true},
        { text: "Narendra Modi" , correct:false},
        {text: "Pratibha Patil",correct:false},
    ]
   },
   { 
    question:"Largest animal in the animal kingdom currently?",
    answers:[
        { text: "Tyrranosauras", correct: false},
        { text : "Shark", correct: false},
        { text: "Giraffe" , correct:false},
        {text: "Blue Whale", correct:true},
    ]
   },
   { 
    question:"Who is the winner of WPL 2024 ?",
    answers:[
        { text: "Chennai Super Kings", correct: false},
        { text : "UP Warrriors", correct: false},
        { text: "Royal Challengers Bangalore" , correct:true},
        {text: "Mumbai Indians" , correct:false},
    ]
   },
   { 
    question:"Capital of South Africa",
    answers:[
        { text: "Pretoria", correct: false},
        { text : "Cape town", correct: false},
        { text: "Bloemfontein" , correct:false},
        {text: "All of the above",correct:true},
    ]
   },
   { 
    question:"Second largest ocean in the world ?",
    answers:[
        { text: "Pacific Ocean", correct: false},
        { text : "Atlantic Ocean", correct: true},
        { text: "Indian Ocean" , correct:false},
        {text: "Arctic Ocean" , correct:false},
    ]
   },
   { 
    question:"National Song of India ?",
    answers:[
        { text: "Rastragan", correct: false},
        { text : "Ae Mere Watan", correct: false},
        { text: "Vande Mataram" , correct:true},
        {text: "All of the above" , correct:false},
    ]
   },
   { 
    question:"Duration of National Anthem",
    answers:[
        { text: "48 sec", correct: false},
        { text : "51 sec", correct: false},
        { text: "52 sec" , correct:true},
        {text: "72 sec" , correct:false},
    ]
   },
   { 
    question:"Iron lady of India",
    answers:[
        { text: "Rani Lakshmi Bai", correct: false},
        { text : "Indira Gandhi", correct: true},
        { text: "Kiran Bedi" , correct:false},
        {text: "Arundhati Roy" , correct:false},
    ]
   },
   {
   question:"Deepest Point known to Humans",
    answers:[
        { text: "Mariana Trench", correct: true},
        { text : "Indus Valley", correct:false},
        { text: "Bay of Bengal" , correct:false},
        {text: "Gulf of Khambat" , correct:false},
    ]
   }

];
let questionelement=document.getElementById("question");
let answerelement=document.getElementById("options");
let nextbtn=document.getElementById("but");
let msg=document.getElementById("number");
let emoj=document.getElementById("emoji");
let emoju=document.getElementById("smiley");
let body=document.getElementsByTagName("body")[0];
let currentquestionindexno=0;
let score=0;

function startquiz(){
    body.style.backgroundImage="url(assets/background1.avif)";
    document.getElementById("container").style.backgroundColor = "lightgreen";
    currentquestionindexno=0;
    score=0;
    nextbtn.innerText="Next";
    document.getElementById("start").style.display="none";
    document.getElementById("new").style.display="none";
    showquiz();
}
clickquiz();
function clickquiz(){
    resetstate();
    questionelement.innerText="WELCOME TO QUIZO";
   body.style.backgroundImage="url(assets/background2.png)";
   document.getElementById("container").style.backgroundColor = "pink";
}

function showquiz(){
   resetstate();
    let currentquestion=questions[currentquestionindexno];
    let questionno=currentquestionindexno+1;
    questionelement.innerText=questionno +"."+ currentquestion.question;

    currentquestion.answers.forEach(answer => {
        let buttons=document.createElement("button");
        buttons.innerText= answer.text;
        buttons.classList.add("opt");
        answerelement.appendChild(buttons);
        
        if(answer.correct){
            buttons.dataset.correct=answer.correct;
        }
      buttons.addEventListener("click",selectanswer);
    });
    
}
function selectanswer(e){
    let selectedbtn=e.target;
    let iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerelement.children).forEach(buttons =>{
        if(buttons.dataset.correct==="true"){
    buttons.classList.add("correct");
        }
        buttons.disabled=true;
    })
    nextbtn.style.display="block";
    nextbtn.style.marginLeft="40%";
}

function showscore(){
resetstate();
questionelement.innerText=`You Scored ${score} out of ${questions.length}!`;
questionelement.style.color="black";
questionelement.style.fontSize="40px";
if(score<=3){
    msg.innerText="Better Luck Next time";
 msg.style.display="block";
 emoj.style.display="block";
}
else{
   msg.innerText="Good";
   msg.style.fontSize="30px";
   msg.style.display="block";
   emoju.style.display="block";
}
nextbtn.innerText="Play Again";
nextbtn.style.width="20%";
nextbtn.style.display="block";
}

function handlenextbutton(){
    currentquestionindexno++;
    if(currentquestionindexno<questions.length){
        showquiz();
    }
    else{
        showscore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentquestionindexno < questions.length){
        handlenextbutton();
    }
    else{
        startquiz();
    }
})

function resetstate(){
    nextbtn.style.display="none";
    while(answerelement.firstChild){
        answerelement.removeChild(answerelement.firstChild);
    }
}



