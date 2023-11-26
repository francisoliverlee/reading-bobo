$(document).ready(function(){
    var lines = $("#read-only-cursor-text-area").text();
    var arry = lines.split("\n");
    for(var i = 0; i<=arry.length-1; i++){
        console.log(arry[i])
    }
});
