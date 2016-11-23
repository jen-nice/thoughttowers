

var main = function(){

 //Random question generator
 $('.question_button').click(function(){

 	var questions = ['What motivates you to do what you do?',
 	'Is it possible to forgive and forget?',
 	'What does happiness look like to you?',
 	'What would you do differently than your parents?',
 	'Do you think life has a purpose?',
 	'What is the hardest lesson you have had to learnt']

 	int rand_question =  arr[Math.floor(Math.random() * questions.length)];
 	document.getElementById("question_disp").innerHTML = rand_question;
 	console.log(rand_question);

 }); 
 
};

$(document).ready(main);

