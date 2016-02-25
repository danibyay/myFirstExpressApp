$(function(){
  $.get('/blocks', appendToList);
  //the return value of get will be passed
  //as an argument to appendToList

  
  function appendToList(blocks){
    var list = [];
    for(var i in blocks){
      list.push($('<li>', {text: blocks[i]}));
    }
    $('.block-list').append(list);
  }
})
