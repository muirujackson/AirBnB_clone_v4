$(document).ready(function() {
    // Function to handle the filter button click event
    $("#filterButton").click(function() {
        // Get the list of checked amenities
        var amenities = [];
        $("input[type='checkbox']:checked").each(function() {
            amenities.push($(this).val());
        });

        // Send a POST request to places_search endpoint with the list of checked amenities
        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search/",
            contentType: "application/json",
            data: JSON.stringify({
                amenities: amenities
            })
        }).done(function(data) {
            // Clear the existing places
            $(".places").empty();

            // Loop through the filtered places data and create article tags representing each place
            data.forEach(function(place) {
                var article = $("<article>");
                // Set the place information in the article tag
                // You can customize this part based on the place data structure
                article.html("<h2>" + place.name + "</h2>" +
                             "<div class='price_by_night'>$" + place.price_by_night + "</div>" +
                             "<div class='information'>" +
                             "  <div class='max_guest'>" +
                             "    <i class='fa fa-users fa-3x' aria-hidden='true'></i>" +
                             "    <br />" + place.max_guest + " Guests" +
                             "  </div>" +
                             "  <div class='number_rooms'>" +
                             "    <i class='fa fa-bed fa-3x' aria-hidden='true'></i>" +
                             "    <br />" + place.number_rooms + " Bedrooms" +
                             "  </div>" +
                             "  <div class='number_bathrooms'>" +
                             "    <i class='fa fa-bath fa-3x' aria-hidden='true'></i>" +
                             "    <br />" + place.number_bathrooms + " Bathroom" +
                             "  </div>" +
                             "</div>" +
                             "<div class='description'>" + place.description + "</div>");
                // Append the article tag to the section.places
                $(".places").append(article);
            });
        });
    });
});
