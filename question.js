class Question {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank=0
    }
  
getQuestion()
{

    var questionIndex="questions/num"+this.index
var questionRef=database.ref(questionIndex)
questionRef.on("value",function(data){
    questions=data.val()
})
    


}

}