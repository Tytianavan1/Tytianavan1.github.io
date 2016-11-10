/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('h3').css('color','orange');
        $('h2').css('color','purple');
        
        $('div').css('color', 'brown');
        
$('#section-album').css('background-color', 'pink').css('border-radius', '8px');
$('#section-songs').css('background-color','pink').css('border-radius','8px');

$('#section-praise').css('background-color', 'lightGreen').css('border-radius', '8px');

$('#section-quotes').css('background-color', 'lightBlue').css('border-radius', '8px');

$('#section-bio').css('background-color', 'orchid').css('border-radius', '8px');
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


