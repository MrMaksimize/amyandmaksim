
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

$(document).ready(function(){
  console.log('ready');

  $('.thanks-page .col1 .row').each(function(index){
    console.log(index);
    var classList = $(this).attr('class').split(/\s+/);
    var rowClass = classList[1];
    var oddHeight = $(this).innerHeight();
    var evenHeight = $('.thanks-page .col2 .' + rowClass).innerHeight();
    console.log(oddHeight);
    console.log(evenHeight);

    if (oddHeight < evenHeight) {
      $('.' + rowClass).height(evenHeight);
    }
    else {
      $('.' + rowClass).height(oddHeight);
    }

  });


  // Generate Map URL
  var images = new Array();
  var imageCount = 10;
  for (var i = 1; i <= imageCount; i++) {
    images.push('images/bg/' + i + '.jpg');
  }
  var images = shuffleArray(images);

  $.backstretch(images, {duration: 5000, fade: 750});



  $('.navigation-links li a').click( function(event) {
    console.log($(this).attr('href'));
    var tName = $(this).attr('href').substring(1);
    //var target = $("a[name='" + tName + "']");
    var target = $('h1.' + tName);
    $.scrollTo(
      target,
      {
        duration: 1000,
        offset: { 'left':0, 'top':-0.2*$(window).height() }
      }
    );
    event.preventDefault();
  });


});
