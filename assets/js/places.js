$(document).ready(function() {
    $("#lat_area").addClass("d-none");
    $("#long_area").addClass("d-none");
});
google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {
    var input = document.querySelector('#Artisan_adresse')
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        $('#Artisan_lat').val(place.geometry['location'].lat());
        $('#Artisan_lng').val(place.geometry['location'].lng());
        document.querySelector('#Artisan_adresse').value = place.name
        document.querySelector('#Artisan_ville').value = place.address_components[2]['long_name']
        document.querySelector('#Artisan_codePostal').value = place.address_components[6]['long_name']
        document.querySelector('#Artisan_lat').value = place.geometry['location'].lat()
        document.querySelector('#Artisan_lng').value = place.geometry['location'].lng()
// --------- show lat and long ---------------
        $("#lat_area").removeClass("d-none");
        $("#long_area").removeClass("d-none");
    });
}

