class Quiz{
    constructor(){}
    getState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",(data)=> {
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start(){
        if (gameState===0){
            contestant=new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question =new Question();
            question.display();
        }
    }

    play(){
        question.hide();
        background("Yellow");
        fill(0);
        textSize(30);
        text("Result of the Quiz",340, 50);
        text("----------------------------",320, 65);
        Contestant.getPlayerInfo();
        if(allContestants !== undefined){
          var display_Answers = 280;
          fill("Blue");
          textSize(20);
          text("*NOTE: Contestant who answered correct are highlighted in green color!",100,280);
    
          for(var plr in allContestants){
            var correctAns = "3";
            if (correctAns === allContestants[plr].answer)
              fill("green")
            else
              fill("red");
    
            display_Answers+=30;
            textSize(20);
            console.log("Name: " + allContestants[plr].name);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
          }
        }
    }
}