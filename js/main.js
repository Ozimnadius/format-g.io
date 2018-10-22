$(function () {
    const body = $('body');

   $('.nav-1__item').on('mouseover', function (e) {
       let item = $(this),
           parent = item.closest('.nav-1'),
           items = parent.find('.nav-1__item');

       items.removeClass('active');
       item.addClass('active');
   });
});