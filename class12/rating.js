const binId= "pv64f";

function getRatings() {
  let ratings;
$.ajax({
  // creates a request and jquery takes a bunch of requests that makes a response for the request
  url:"https://api.myjson.com/bins/"+binId,
  async: false,
  success: function(data) {
    ratings = data;
  }
})
return ratings;
}

function addRating(rating) {
  const newRatings = this.getRatings();
  newRatings.ratings.push(rating);
  $.ajax({
        url:"https://api.myjson.com/bins/"+binId,
        type:"PUT",
        data: JSON.stringify(newRatings),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data, textStatus, jqXHR){

        }
    });
}
