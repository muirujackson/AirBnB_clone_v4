$(document).ready(function() {
    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var selectedAmenities = [];
        // Loop through each checked checkbox
        $('input[type="checkbox"]:checked').each(function() {
            var amenityId = $(this).data('id');
            var amenityName = $(this).data('name');
            selectedAmenities.push({ id: amenityId, name: amenityName });
        });
        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        var selectedAmenitiesText = selectedAmenities.map(function(amenity) {
            return amenity.name;
        }).join(", ");
        $('#selected-amenities').text(selectedAmenitiesText);
    });
});
