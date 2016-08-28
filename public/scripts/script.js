$(function () {

  function animateOnClick(el, content) {
    var $work = $('#work-content'),
        $about = $('#about-content'),
        $contact = $('#contact-content');

    $(el).on('click', function (e) {
      e.preventDefault();
      $(content).show();
      $contact.removeClass();
      $about.removeClass();
      $work.removeClass();

      $(content).addClass('z-12');

      $(content).addClass('animated fadeInRightBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
        $(this).removeClass('animated fadeInRightBig');
      });
    });
  }

  function animateOnHover(el, content) {

    $(el).on('mouseover', function (e) {
      e.preventDefault();

      $(content).addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function () {
        $(this).removeClass('animated rubberBand');
      });
    });
  }

animateOnHover( '.mail-link', '#mail-icon' );
animateOnHover( '.github-link', '#github-icon' );
animateOnHover( '.linked-link', '#linked-icon' );

animateOnClick('#work-link', '#work-content');
animateOnClick('#about-link', '#about-content');
animateOnClick('#contact-link', '#contact-content');

});
