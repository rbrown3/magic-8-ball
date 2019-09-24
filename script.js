$(document).ready(function(){
var magicEightBall = {};
 magicEightBall.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely","You may rely on it", "As I see it, yes",  "Most likely", "Outlook good", "Yes", "Signs point to yes","Don't count on it","My reply is no", "My sources say no","Outlook not so go","Very doubtful", "Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now",
"Concentrate and ask again"];
$("#answer").hide();
// define the method
magicEightBall.askQuestion = function(question) {

     var randomNumber = Math.random();


     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;


     var randomIndex = Math.floor(randomNumberForListOfAnswers);


     var answer = this.listOfAnswers[randomIndex];

	$("#answer").text(answer);
};

var onClick = function () {

    $("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    setTimeout(function(){
	var question = prompt("Ask Me Anything");
 	magicEightBall.askQuestion(question);},500,$("#8ball").effect( "shake" ));

	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	};



$("#questionButton").click( onClick);
});
