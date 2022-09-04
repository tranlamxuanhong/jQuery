// $(document).ready(function () {
//
// });
$(document).ready(function(){
  $('h1').addClass('text-center');
  $('h2').addClass('text-center');



  // $('.myBannerHeading').css('background-color','black');
  $('#myBanner').removeClass('myBannerHeading');
  $('#myBanner').addClass('page-header');
  $('#yellowHeading').text('Yellow Team');

  $('#yellowTeamList').append('<li>Joseph Banks</li>');
  $('#yellowTeamList').append('<li>Simon Jones</li>');
  $('#oops').hide();
  $('#footerPlaceholder').remove();
  $('#footer').append('<p>Hong Tran - tlxhong1108@gmail.com</p>');
  $('footer').css({'font-size':'24px' ,'font-family':'verdana'});

})
