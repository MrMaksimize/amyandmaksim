
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

$(document).ready(function(){
  console.log('ready');

  $('.thanks-page .col1 .row').each(function(index){
    var classList = $(this).attr('class').split(/\s+/);
    var rowClass = classList[1];
    var oddHeight = $(this).innerHeight();
    var evenHeight = $('.thanks-page .col2 .' + rowClass).innerHeight();

    if (oddHeight < evenHeight) {
      $('.' + rowClass).height(evenHeight + 50);
    }
    else {
      $('.' + rowClass).height(oddHeight + 50);
    }

  });


  // Generate Map URL
  var images = new Array();
  var imageCount = 12;
  for (var i = 1; i <= imageCount; i++) {
    images.push('images/bg/' + i + '.jpg');
  }
  var images = shuffleArray(images);

  $.backstretch(images, {duration: 5000, fade: 750});


  if (getInternetExplorerVersion() == -1) {
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
  }

});
