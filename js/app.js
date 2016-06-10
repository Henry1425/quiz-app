/*Step #1 Defining Global Variables*/
// questionsArrray is a JS data type array because of the square brackets []
var questionsArray = [
    // Question # 1
    {
        questionText: 'One man with courage is a majority.',
        questionChoices: ['John Adams', 'Andrew Jackson', 'Thomas Jefferson'],
        questionCorrectChoice: 2,
        correctDetails: 'Thomas Jefferson.'
    },

    //Question #2
    {
        questionText: 'What is right and what is practicable are two different things.',
        questionChoices: ['James Polk', 'James Buchanan', 'Franklin Pierce'],
        questionCorrectChoice: 1,
        correctDetails: 'James Buchanan.'
    },

    //Question #3
    {
        questionText: 'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.',
        questionChoices: ['John Quincy Adams', 'Abraham Lincoln', 'Lyndon Johnson'],
        questionCorrectChoice: 0,
        correctDetails: 'John Quincy Adams.'
    },

    //Question #4
    {
        questionText: 'Tell me what is right and I will fight for it.',
        questionChoices: ['Franklin Roosevelt', 'Woodrow Wilson', 'John f. Kennedy'],
        questionCorrectChoice: 1,
        correctDetails: 'Woodrow Wilson.'
    },

    //Question #5
    {
        questionText: 'It is far better to be alone, than to be in bad company.',
        questionChoices: ['Harry Truman', 'Herbert Hoover', 'George Washington'],
        questionCorrectChoice: 2,
        correctDetails: 'George Washington.'
    },
    //Question #6
    {
        questionText: 'It is amazing what you can accomplish if you do not care who gets the credit.',
        questionChoices: ['Harry Truman', 'John F. Kennedy', 'Theodore Roosevelt'],
        questionCorrectChoice: 0,
        correctDetails: 'Harry Truman.'
    },

    //Question #7
    {
        questionText: 'When you reach the end of your rope, tie a knot in it and hang on.',
        questionChoices: ['Barak Obama', 'Calvin Coolidge', 'Franklin D. Roosevelt'],
        questionCorrectChoice: 2,
        correctDetails: 'Franklin D. Roosevelt.'
    },

    //Question #8
    {
        questionText: 'Government\'s first duty is to protect the people, not run their lives.',
        questionChoices: ['Bill Clinton', 'Ronald Reagan', 'George W. Bush'],
        questionCorrectChoice: 1,
        correctDetails: 'Ronald Reagan.'
    },

    //Question #9
    {
        questionText: 'The only thing we have to fear is fear itself.',
        questionChoices: ['John F. Kennedy', 'Richard Nixon', 'Franklin D. Roosevelt'],
        questionCorrectChoice: 2,
        correctDetails: 'Franklin D. Roosevelt.'
    },

    //Question #10
    {
        questionText: 'War should never be entered upon until every agency of peace has failed.',
        questionChoices: ['William McKinley', 'Grover Cleveland', 'Thomas Jefferson'],
        questionCorrectChoice: 0,
        correctDetails: 'William McKinley.'
    },

    //Question #11
    {
        questionText: 'A president’s hardest task is not to do what is right, but to know what is right.',
        questionChoices: ['Andrew Johnson', 'James K. Polk', 'Lyndon Johnson'],
        questionCorrectChoice: 2,
        correctDetails: 'Lyndon Johnson'
    },
    //Question #12

    {
        questionText: 'Older men declare war. But it is the youth that must fight and die.',
        questionChoices: ['Herbert Hoover', 'George H.W. Bush', 'Jimmy Carter'],
        questionCorrectChoice: 0,
        correctDetails: 'Herbert Hoover'
    },
];
var currentQuestionNumber = 0;
var correctTotal = 0; // references to total amount of correct answers
var totalNumberOfQuestions = questionsArray.length; //total number of questions

/* Defining functions*/
function questionDisplay() {
    // 1- this updates the each question text
    $('#prompt').text('"' + questionsArray[currentQuestionNumber].questionText + '"');
    // 2- display the what are the choices for the current question
    // 2.1- first delete all the existing choices before populating it with new ones
    $('#choices').empty();
    // 2.2- the get the total number of choices for the current question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    // 2.3-loop through all the choices and append them to the choices container
    for (var i = 0; i < totalNumberOfChoices; i++) {
        // 2.3.1loop thru the answer choices and create an dynamically generated row for each of them
        var buildEachChoiceHTML = "<input type= 'radio' class= 'option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        // 2.3.2- append that row to the choices container in html
        $('#choices').append(buildEachChoiceHTML);
    }
    //3- displays the number of the current question
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestions);


}



//document ready function
$(document).ready(function () {
    $('.questions').hide();
    $('.results').hide();
    $('#startButton').click(function () { //start the quiz and show the first question
        $('.intro').hide();
        $('.results').hide();
        $('.questions').show();

    });
    $('.questions').on('click', '.option', function () {
        var answer = $("input[class='option']:checked").val(); //will get the answer from the user
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        if (answer == correctAnswer) { // checks to see if the answer is correct
            //if correct answer was selected
            correctTotal++;
            //console.log(correctTotal);
        }
        $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");

        //if quiz is finished, show result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestions) {

            //show the final score
            $('#result').text(correctTotal + "/" + totalNumberOfQuestions);

            //hide other "screens"
            $('.questions').hide();
            $('.intro').hide();
            $('.results').show();
        }
        //else continue to next question
        else {
            //increment the current question number
            currentQuestionNumber++;
            //display a the following question
            questionDisplay();
        }
    });
    $('#againButton').click(function () { //start the quiz and show the first question
        $('.results').hide();
        $('.questions').hide();
        $('.intro').show();
    });

});
