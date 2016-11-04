function main() {
  $('.myList').hide();
  $('.button').on('click',function(){
    $(this).next().slideToggle(400);
    });
}

$(document).ready(main);