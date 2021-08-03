class Contestant{
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }
    getCount(){
        var contestantCountref=database.ref('contestantCount');
        contestantCountref.on("value",(data)=> {
            contestantCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
    }
    update(){
        var contestantIndex="contestant"+contestantCount;
        database.ref(contestantIndex).set({
            name: this.name,
            answer: this.answer
        });
    }
    static getPlayerInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
          allContestants = data.val();
        })
      }
}