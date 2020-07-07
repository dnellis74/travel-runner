function DOMContentLoaded() {
    // 1. Edit widget size
    var settings22 = {
        width: '100%', // set the width in px or %
        height: '460px' // set the height in px or %
    };

    // 2. Fill out your config here and the rest should work (customize with more parameters at the end of the docs)
    var s22obj = {
        aid: 'kindeagle',                    // 1) your affiliate id for tracking
        address: 'City Park, Denver, CO',       // 2) Lat/Lng or full street address. For latlng use the "lat":,"lng": keys instead
        checkin: '2021-08-22',                     // 3) checkin date for their stay in MM/DD/YYYY or ISO 8601 format
        maincolor: '00549E'                          // your main brand color in hex (without the #)
    };

    // Leave this part as-is; it inserts the map iframe on your page
    var params22 = '';
    for (var key in s22obj) {
        if (params22) {
            params22 += '&';
        }
        params22 += key + '=' + encodeURIComponent(s22obj[key]);
    }
    var div22 = document.getElementById('stay22-script');
    div22.insertAdjacentHTML('afterend', '<iframe id="stay22-widget" width="' + settings22.width + '" height="' + settings22.height + '" src="' + 'https://www.stay22.com/embed/gm?' + params22 + '" frameborder="0"></iframe>');
};