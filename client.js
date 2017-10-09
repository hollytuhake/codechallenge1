console.log('sourced');

$(document).ready(readyNow);

function readyNow(){
  console.log('ready');
  $("#generate").on('click',createDiv);
  $("body").on('click', '#swap', swapColor);
  $("body").on('click', '#del',deleteDiv);
}

i = 0;

function createDiv(){
  i = i + 1;
  $("body").append("<div class='generated'><p>" + i + "</p><button id='swap'>" + 'Swap' + "</button><button id='del'>" + 'Delete' + "</button></div>");

}

function swapColor(){
  $(this).parent().css('background-color', 'yellow');
}

function deleteDiv(){
  $(this).parent().remove();
}
