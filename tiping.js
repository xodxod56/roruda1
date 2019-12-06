
    var x = "Hey, dickhead.Welcome to this place.";
    var i = 0;
        function type(){
        if(i < x.length){
            document.getElementById("typing").innerHTML += x[i];
            i++;
            setTimeout(type,100);
            }
        }
        type();
