$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = ('#m3u8-placeholder')[0].value;
    });
});

var jw = document.getElementById('jw');

function playM3u8(){
  if(Hls.isSupported()) {
      jw.volume = 0.3;
      var hls = new Hls();
      var m3u8Url = decodeURIComponent(('#m3u8-placeholder')[0].value;)
      hls.loadSource(m3u8Url);
      hls.attachMedia(jw);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        jw.play();
      });
      document.title = url
    }
	else if (jw.canPlayType('application/vnd.apple.mpegurl')) {
		jw.src = url;
		jw.addEventListener('canplay',function() {
		  jw.play();
		});
		jw.volume = 0.3;
		document.title = url;
  	}
}

function playPause() {
    jw.paused?jw.play():jw.pause();
}

function volumeUp() {
    if(jw.volume <= 0.9) jw.volume+=0.1;
}

function volumeDown() {
    if(jw.volume >= 0.1) jw.volume-=0.1;
}

function seekRight() {
    jw.currentTime+=5;
}

function seekLeft() {
    jw.currentTime-=5;
}

function vidFullscreen() {
    if (jw.requestFullscreen) {
      jw.requestFullscreen();
  } else if (jw.mozRequestFullScreen) {
      jw.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
      jw.webkitRequestFullscreen();
    }
}

playM3u8(window.location.href.split("#")[1])
$(window).on('load', function () {
    $('#player').on('click', function(){this.paused?this.play():this.pause();});
    Mousetrap.bind('space', playPause);
    Mousetrap.bind('up', volumeUp);
    Mousetrap.bind('down', volumeDown);
    Mousetrap.bind('right', seekRight);
    Mousetrap.bind('left', seekLeft);
    Mousetrap.bind('f', vidFullscreen);
});
