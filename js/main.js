$(document).ready(function(){
  console.log('ready');
  // Generate Map URL

  $('#wrapper').bgScroll({
    first_image: 'images/bg/8.jpg',
    first_section: 0,
    images_src: [
      'images/bg/8.jpg',
      'images/bg/7.jpg',
      //'images/bg/3.jpg',
      //'images/bg/4.jpg',
    ],
    img_height: 723,
    img_width: 1300,


      /*analytics: false,
      first_image: 'http://lorempixel.com/1500/723/nature/'
      first_section: 0,
      images: true,
      images_src: [
          'http://lorempixel.com/1500/723/nature/',
          'http://lorempixel.com/1500/723/abstract/',
          'http://lorempixel.com/1500/723/sports/',
          'http://lorempixel.com/1500/723/nightlife/'
      ],
      img_height: 723,
      img_width: 1500,
      spacer_height: 'auto',
      tag_name: 'section',
      wrap_div: '#wrapper'*/
  });



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