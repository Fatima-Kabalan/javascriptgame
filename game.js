document.addEventListener("DOMContentLoaded",function(){


    var boundaries = document.getElementsByClassName("boundary")
    window.addEventListener("load", function(){
        var boundaries = document.getElementsByClassName("boundary");
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addEventListener("mouseover",mouseOver);
        }
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
    
})    