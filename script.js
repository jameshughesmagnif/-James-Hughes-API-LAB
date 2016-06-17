// initial API call
$(document).ready( function() {
  $("form").submit(function(evt){
    evt.preventDefault();
    var keyword = $("input[name='keyword']").val();
    var url = "https://www.omdbapi.com/?t="+keyword
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    })
      .done(function(response){
        console.log(response);
        movie(response);
      })
      .fail(function(fail){
        console.log("FAIL");
      })
      .always(function(){
        console.log("This is always gonna happen.");
      })
  });
})

//Add something like this to append data to the page
var movie = function(response) {
// add code here to append data to the body!
$('body').append("<div class = movie-title></div>")
$('.movie-title').append("<p>"+response.Title+"</p>")
$('.movie-title').append("<img src = '"+response.Poster+"'>")
}
