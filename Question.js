class Question{
    constructor(){
        this.title = createElement('h2');
        this.input1 = createInput("Enter Your Name");
        this.input2 = createInput("Enter Correct Option");
        this.button = createButton("Submit");
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }
    hide(){
        this.button.hide();
        this.input1.hide();
        this.input2.hide();
        this.title.hide();
    }
    display(){
        this.title.html("My quiz");
        this.title.position(350,20);
 
        this.input1.position(150,300); 
        this.input2.position(450,300);        
        this.button.position(300,350);

        this.question.html("Question: Which is the largest planet in the solar system ?");
        this.question.position(100,100);
 
        this.option1.html("1. Sun");
        this.option1.position(100,130);
        this.option2.html("2. Earth");
        this.option2.position(100,160);
        this.option3.html("3. Jupiter");
        this.option3.position(100,190);
        this.option4.html("4. Saturn");
        this.option4.position(100,220);

        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          });
    }
}