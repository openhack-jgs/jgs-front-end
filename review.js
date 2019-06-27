$(function() 
{ 
    $(document).ready(function() {
    
      $(".close").click(function() {
        $("#myModal").css({
          "display": "none"
        });
      });

      $("html").click(function(event) {
        if (event.target.id === "myModal") {
          $("#myModal").css({
            "display": "none"
          });
        }
      });
    });
  })
  