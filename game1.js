document.addEventListener("DOMContentLoaded",function(){
    var start = document.getElementById("start")
    var boundary1 = document.getElementById("boundary1")
    var boundaries = document.getElementsByClassName("boundary")
    var end = document.getElementById("end")
    var head = document.getElementById("status")
    // var game = document.getElementById("game")


    start.onmouseover = function() {mouseOver()};
    function mouseOver() {
        start.style.color = "blue";
        boundary.textContent=("game start");
    }

    start.onmouseout= function handleMouseOut(){
        start.style.color = 'black';
    };

    start.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    start.style.position = 'absolute';
    start.style.zIndex = 1000;

    document.body.append(start);

    // centers the box at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
    start.style.left = pageX - start.offsetWidth / 2 + 'px';
    start.style.top = pageY - start.offsetHeight / 2 + 'px';
    }

    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (2) move the box on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (3) drop the box, remove unneeded handlers
    start.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        start.onmouseup = null;
    };

    };
    start.ondragstart = function() {
        return false;
    };

    var boundaries = document.getElementsByClassName("boundary")
    for (var i = 0 ; i < boundaries.length;i++){
        boundaries[i].addEventListener("mouseover", mouseOver );

    }
    window.addEventListener("load", function(){
    function mouseOver(){
        for (var i = 0 ; i < boundaries.length;i++){
            boundaries[i].style.backgroundColor="red";
            document.getElementById("status").innerHTML=("You Lose!")
        };
    }

    function mouseover1(){
        var end = document.getElementById("end")
        end.style.backgroundColor="grey"
        document.getElementById("status").innerHTML=("You WIN!") 
    }

    end.addEventListener("mouseover", mouseover1 );


})



   



   
//   const specifiedElement = document.getElementById("start");
//   document.addEventListener("onmouseover", (event) => {
//   const isClickInside = specifiedElement.contains(event.target);

//   if (!isClickInside) {
//     console.log("You clicked outside");
//         } else {
//           console.log("You clicked inside");
//         }
//   });
     

    


    









})