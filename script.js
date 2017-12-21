$(document).ready(function() {
    $("#button").click(function(){
        var input = $("#input").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&callback=?";
    
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                $("output").html("");
                for(var i = 0; i < data[1].length; i++) {
                    $("#output").prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
                $("#input").val("");
            },
            error: function(errorMessage) {
                alert("Error");
            }
        });
    });
    $("#input").keypress(function(e) {
        if(e.which == 13) {
            $("button").click();
        }
    });
});