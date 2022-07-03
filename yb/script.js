var $players = document.querySelectorAll(".js-youtube-instance");

var youtube_parser = function (url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

var statsQuadrants = function (position, storage, mid) {
  if (!storage[mid]) {
    storage[mid] = {};
  }

  if (position >= 25 && position < 50) {
    if (!storage[mid][25]) {
      storage[mid][25] = 1;
      console.log('\n25% ' + youtube_parser(mid) + '\n');
    }
  } else if (position >= 50 && position < 75) {
    if (!storage[mid][50]) {
      storage[mid][50] = 1;
      console.log('\n50% ' + youtube_parser(mid) + '\n');
    }
  } else if (position >= 75 && position < 100) {
    if (!storage[mid][75]) {
      storage[mid][75] = 1;
      console.log('\n75% ' + youtube_parser(mid) + '\n');
    }
  }
};

var youtubePlayer = function (element) {
  var player = new Plyr(element, {});

  var playerInitialized = false;
  var playerPlaying = true;
  var quadrants = {};
  var mid;

  player.on("ready", function () {
    if (!playerInitialized) {
      playerInitialized = true;
      player.volume = 100;
      mid = player.source;
      // console.log('ready', youtube_parser(mid));
    }
  });

  player.on("play", function () {
    if (playerPlaying) {
      playerPlaying = false;
      console.log('play', youtube_parser(mid));
    }
  });

  player.on("ended", function (e) {
    console.log('ended', youtube_parser(mid));
  });

  player.on("timeupdate", function (e) {
    var currentTime = player.currentTime;
    var duration = player.duration;
    var position = Math.round(currentTime / duration * 100);

    statsQuadrants(position, quadrants, mid);
  });
};

$players.forEach(function (element, index) {
  youtubePlayer(element);
});
