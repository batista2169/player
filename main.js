$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '?source=' + $('#m3u8-placeholder')[0].value;
        mylink = $('#m3u8-placeholder')[0].value;
    });
});
