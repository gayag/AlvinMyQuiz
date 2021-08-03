var canvas;
var question;
var quiz,contestant;
var gameState=0;
var database;
var allContestants;
var answer;
var contestantCount;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  database.ref('/').update({
    contestantCount: 0,
    gameState: 0
  });
  database.ref('contestants/contestant1').update({
    name: "",
    answer: 0
  });
  database.ref('contestants/contestant2').update({
    name: "",
    answer: 0
  });

  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
