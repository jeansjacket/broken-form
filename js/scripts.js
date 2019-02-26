$(document).ready(function() {
  $("#favorite-things").submit(function(event) {
     event.preventDefault();
     var faveColor = $("input#color").val();
     var foodFood = $("input#food").val();
     var faveSeason = $("input#season").val();
     var faveShow = $("input#tv-show").val();

    var things=["color", "food", "season", "tv-show"]
    things.forEach(function(thing) {
      alert('your faveThings ' + #things + '!');
 });
    // $(".best-color").text(faveThings[0]);
    // $(".best-food").text(faveThings[1]);
    // $(".best-season").text(faveThings[2]);
    // $(".best-tv-show").text(faveThings[3]);
    //
  });
});
