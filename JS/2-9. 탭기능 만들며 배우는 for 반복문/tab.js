$('.tab-button').eq(0).on('click', function(){
  $('.tab-button').eq(0).addClass('orange');
  $('.tab-button').eq(1).removeClass('orange');
  $('.tab-button').eq(2).removeClass('orange');
  $('.tab-content').eq(0).addClass('show');
  $('.tab-content').eq(1).removeClass('show');
  $('.tab-content').eq(2).removeClass('show');
});

$('.tab-button').eq(1).on('click', function(){
  $('.tab-button').eq(1).addClass('orange');
  $('.tab-button').eq(0).removeClass('orange');
  $('.tab-button').eq(2).removeClass('orange');
  $('.tab-content').eq(1).addClass('show');
  $('.tab-content').eq(0).removeClass('show');
  $('.tab-content').eq(2).removeClass('show');
});

$('.tab-button').eq(2).on('click', function(){
  $('.tab-button').eq(2).addClass('orange');
  $('.tab-button').eq(0).removeClass('orange');
  $('.tab-button').eq(1).removeClass('orange');
  $('.tab-content').eq(2).addClass('show');
  $('.tab-content').eq(0).removeClass('show');
  $('.tab-content').eq(1).removeClass('show');
});