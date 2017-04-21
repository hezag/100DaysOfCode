$(document).ready(function () {
  $('body').scrollspy({ target: '#navbar', offset: 100 });
  $('.navbar-nav a').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {

      $('.active').removeClass('active');
      $(this).addClass('active');

      var $target = $(this.hash);
      $('html, body')
      .stop()
      .animate({
      'scrollTop': $target.offset().top-50
      }, 500, 'swing');
    }
  });
});
