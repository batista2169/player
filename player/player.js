<!DOCTYPE html><html lang="en" dir="ltr" data-cast-api-enabled="true"> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="robots" content="noindex"> <title>JBF-TVPlayer</title> <script src='https://ssl.p.jwpcdn.com/player/v/8.6.2/jwplayer.js'></script> <script type="text/javascript">jwplayer.key="XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo";</script> <script type="text/javascript">var jw = {"file":"#m3u8-placeholder","image":null,"color":"#0008ff","link":"https:\/\/tv0800.zip","logo":"","auto":"true","text":"DooPlay Theme WordPress","lposi":"bottom-left","flash":"https:\/\/tv0800.zip\/wp-content\/themes\/dooplay\/assets\/jwplayer\/jwplayer.flash.swf"}</script> <style type="text/css" media="all"> html,body{padding:0;margin:0;height:100%}#player{width:100%!important;height:100%!important;overflow:hidden;background-color:#000}</style> </head> <body class="jwplayer"> <div id="player"></div> <script type="text/javascript">const player = jwplayer('player').setup({image: jw.image,mute: false,volume: 25,autostart: jw.auto,repeat: false,abouttext: jw.text,aboutlink: jw.link,skin: {active: jw.color
},logo: {file: jw.logo,hide: true,link: jw.link,margin: '15',position: jw.lposi
},sources: [{file: jw.file,type: 'video/mp4'
}],})
</script> </body></html>
$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '?source=' + $('#m3u8-placeholder')[0].value;
        jw.file = $('#m3u8-placeholder')[0].value;
    });
});
