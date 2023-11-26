$(document).ready(function(){
    var file_path=$('#StickyHeader').text()
    if (!file_path) {
        return
    }
    var lines = $("#read-only-cursor-text-area").text();
    if (!lines) {
        return
    }
    
    var arry = lines.split("\n");
    for(var i = 0; i<=arry.length-1; i++){
        console.log(arry[i])
    }
});
