document.addEventListener("DOMContentLoaded", function(){
//grid creation

for (var i = 0; i < 440; i++){
 var tile = document.createElement('div')
  // tile.className = "pixelGrid"
  tile.style.width = "18px"
  tile.style.height = "18px"
  // tile.style.paddingBottom = "2%"
  tile.style.float = "left"
  tile.style.border = "1px solid black"
 var pixelGrid = document.getElementsByClassName('pixelGrid')[0];
  pixelGrid.appendChild(tile);

 }


var colorArr =["red", "blue", "yellow", "green"];
for (var i = 0; i < colorArr.length; i++){
  var colorTool = document.createElement('div')
  colorTool.style.width = "100px";
	colorTool.style.height = "100px";
	colorTool.style.background = colorArr[i];
	colorTool.style.mozBorderRadius = "50px";
	colorTool.style.webkitBorderRadius = "50px";
	colorTool.style.borderRadius = "50px";
  colorTool.style.float = "left"
  colorTool.style.border = "1px solid black"
  var colorSelect = document.getElementsByClassName('colorSelect')[0];
  colorSelect.appendChild(colorTool);


}
let board = document.getElementsByClassName("pixelGrid");
let palette = document.getElementsByClassName("colorSelect");
let colorPick;

for (var color of palette){
  color.addEventListener('click', function(event){
colorPick = event.target.style.backgroundColor;
console.log(event.target);
  });
};

for (var square of board){
square.addEventListener('click', function(event){
  if (event.target.className === 'pixelGrid'){
    return;
  }else{
    event.target.style.backgroundColor = colorPick;
  console.log(event.target);
  }
});
};



let isPainting = false;

  board[0].addEventListener('mousedown', function(event){

    if(event.target.className === 'pixelGrid'){

      return;
    }else{
      isPainting = true;}



  })

  board[0].addEventListener('mouseup', function(event){
    console.log(event.target.className == board[0].className);
    if(event.target.className === 'pixelGrid'){

      return;
    }else{
      isPainting = false;}


  })

  board[0].addEventListener('mouseover', function(event) {

    if(event.target.className === 'pixelGrid'){
      return;
    }else if (isPainting === false) {
      return;
    } else {
      event.target.style.backgroundColor = colorPick;
    }

});




})



// var buttonClicked = function(event) {
//        event.target.style.backgroundColor = colorArr[0];
//      }
//      pixelGrid.addEventListener('click', buttonClicked)
