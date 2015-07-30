// add scripts

$(document).on('ready', function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var toDo = $('input').val();
    $('#all-todos').prepend('<li><h2>'+toDo+
      '&nbsp;<button class="btn btn-danger btn-sm">X</button></h2></li>');
  });



  // $('#all-todos').on('click', '.btn-danger', function(){
  //   event.preventDefault();
  //   $('li .btn-danger').remove();
  // });

  $("#all-todos").on('click','.btn-danger', function () {
    $(this).parent().parent().remove();
  });




});
