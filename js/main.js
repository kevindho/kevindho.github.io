//Author: Kevin Ho 30441068
//main js file
function main() {
  $('.myList').hide();
  $('.button').on('click',function(){
    $(this).next().slideToggle(400);
    });
}

$(document).ready(main);