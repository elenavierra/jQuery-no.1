function highlight(){
  $('h1').text('Hello');
  $(".jumbotron").addClass('highlighted');
}
function unhighlight(){
  $('h1').text('Hello, world!');
  $(".jumbotron").removeClass('highlighted');
}
