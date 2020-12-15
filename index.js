var readlineSync = require('readline-sync')
var userName = readlineSync.question("what is your name ")
console.log("hi "+userName)
var score = 0;
function quiz(question,answer){
  readline = readlineSync.question(question)
  if(readline === answer){
    console.log("you were right")
    score++;
    console.log(score)
  }
  else{
    console.log("wrong")
  }
}
var ans = [{
  question: "how many centuries did dhoni score in his overall career",
  answer: "16",
},
{
question: "dhonis birth year",
answer: "1981",
},
{
  question: "where did dhoni make his test debut",
  answer: "chennai"
}]
for(var i=0;i<ans.length;i++){
  quiz(ans[i].question,ans[i].answer)

}
console.log("--------------------")
console.log("your final score is",score)
