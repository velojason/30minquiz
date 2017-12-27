var questions = [
  {
    "q": "Sangaree, a predecessor drink to sangria that was served either hot or cold, likely originated in what part of the world?",
    "a": [
      { "answer": true, "text": "The Caribbean"},
      { "answer": false, "text": "Africa"},
      { "answer": false, "text": "Australia"}
    ]
  },
  {
    "q": "The term sangria dates back to which century?",
    "a": [
      { "answer": false, "text": "20th"},
      { "answer": false, "text": "19th"},
      { "answer": true, "text": "18th"},
      { "answer": false, "text": "17th"}
    ]
  },
  {
    "q": "Sangria as an iced drink was reintroduced to the U.S. by the late 1940s and gained popularity with the 1964 World's Fair. Where was it held?",
    "a": [
      { "answer": false, "text": "Los Angeles"},
      { "answer": true, "text": "New York"},
      { "answer": false, "text": "Seattle"},
      { "answer": false, "text": "San Francisco"}
    ]
  },
  {
    "q": "Glühwein (roughly translated as \"burning-wine\", from the temperature the wine is boiled to) is popular in German-speaking countries. At what temperature does wine boil?",
    "a": [
      { "answer": false, "text": "158&deg; F / 70&deg; C"},
      { "answer": false, "text": "200&deg; F / 93&deg; C"},
      { "answer": false, "text": "212&deg; F / 100&deg; C"},
      { "answer": true, "text": "173&deg; F / 78&deg; C"}
    ]
  },
  {
    "q": "What Spanish artist said he would eat his wife when she died?",
    "a": [
      { "answer": true, "text": "Dali"},
      { "answer": false, "text": "Picasso"},
      { "answer": false, "text": "Goya"},
      { "answer": false, "text": "Velazquez"}
    ]
  },
  {
    "q": "What is the term for the peninsula comprised of Spain and Portugal?",
    "a": [
      { "answer": false, "text": "Gibralter"},
      { "answer": true, "text": "Iberia"},
      { "answer": false, "text": "Ibiza"},
      { "answer": false, "text": "Arabia"}
    ]
  },
  {
    "q": "In Sweden, glögg is a popular Christmas time spiced wine. What is the name for the special type of smörgåsbord served during the holiday?",
    "a": [
      { "answer": false, "text": "Noelbord"},
      { "answer": false, "text": "Koldtbord"},
      { "answer": true, "text": "Julbord"},
      { "answer": false, "text": "Smörbord"}
    ]
  },
  {
    "q": "Traditional Spanish sangria consists of a base of Spanish Rioja mixed with what?",
    "a": [
      { "answer": false, "text": "Nuts"},
      { "answer": false, "text": "Candy"},
      { "answer": true, "text": "Fruits"},
      { "answer": false, "text": "Toenails"}
    ]
  },
  {
    "q": "What is sangria most likely to be served in?",
    "a": [
      { "answer": false, "text": "Socks"},
      { "answer": true, "text": "Pitcher / Bowl"},
      { "answer": false, "text": "Can"},
      { "answer": false, "text": "Hat"}
    ]
  },
  {
    "q": "A Spanish sparkling sangria is likely to use a cava. What is the largest producer of cava in Spain?",
    "a": [
      { "answer": false, "text": "Elyssia"},
      { "answer": false, "text": "Juve Y Camps"},
      { "answer": false, "text": "Segura Viudas"},
      { "answer": true, "text": "Freixenet"}
    ]
  }
];

var qCount = 1;
var score = 0;

var getnext = function () {
  listen = true;
  if(questions.length <= 0) {
    displayEnd();
  } else {
    var get = Math.floor(Math.random()*questions.length);

    var question = questions.splice(get,1)[0];

    $('#qcount').html(qCount);
    $('#question').html(question.q);
    $('#answers').empty();

    var answers = question.a;
    answers.forEach(function (answer) {
      var className = answer.answer === true ? 'right' : 'wrong';
      var a = $('<div/>').addClass(className).addClass('alert answer').append('<p/>').html(answer.text);
      $('#answers').append(a);
    });
  }
}

var displayEnd = function () {
  $('.display-3').html('Final score: ' + score);
  $('#question').remove();
  $('#answers').remove();
  $('.text-muted').empty();
}

$(function () {
  getnext();

  $('body').on('click', '.answer', function (e) {
    if(!listen) {
      return;
    }
    listen = false;

    var $this = $(this);

    qCount += 1;

    $('.right').addClass('alert-success');
    $('.wrong').addClass('alert-danger');

    if($this.hasClass('right')) {
      score += 1;
      $('#score').html(score);
    }

    setTimeout(function () {
      getnext();
    }, 2000);
  });
});
