(function($,Cookies) {
  $(document).ready(function () {
    

    let select = $('select');
    select.each(function (e) {
      let cookie = Cookies.getJSON($(this)[0].id);
      if (cookie)
        $(this)[0].selectedIndex = cookie.index;

    });
    $('select').on('change', function (e) {
      Cookies.set(e.target.id, { 'index': e.target.selectedIndex, 'value': e.target.value });
    });

    $('#search, #search ~ label i').on('click', function (event) {
      event.stopPropagation();
    });

    $('#search ~ label i').on("click", function () {
      $('#search').toggleClass('input--hide', !$('#search').hasClass('input--hide') && $('#search').val() == "");
    });
    $('*').not('#search , #search ~ label i').on("click", function () {
      $('#search').toggleClass('input--hide', $('#search').val() == "");
    });
    $('select').on('click', function () { $(this).parent().toggleClass('select--active'); });
    $('select').on('blur', function () { $(this).parent().removeClass('select--active'); });
    $(window).on('scroll', function () { $('select').parent().removeClass('select--active'); });
    $('.indicators-count').html($('.carousel-indicators').children("li").length);

    $('.personal .carousel .carousel-item').each(function () {
      var next = $(this).next();
      if (!next.length)
        next = $(this).siblings(':first');
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < 3; i++) {
        if (!next.next().length)
          next = next.siblings(':first');
        else
          next = next.next();
        next.children(':first-child').clone().appendTo($(this));
      }
    });
  });
}) (require('jquery'),require('js-cookie'));