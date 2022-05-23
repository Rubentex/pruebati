var player;

var conf = {
  key: "96dca549-b37c-4c02-9847-bfd953323ab5",
  playback: {
            autoplay: false,
            muted: false
        },
        advertising: {
            adBreaks: [{
                tag: {
                    url: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=',
                    type: 'vast'
                }
            }]
        }
};
var source = {
  hls:
    "https://abp-i.akamaihd.net/hls/live/765533/abpsanjha/master.m3u8",
  poster: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
};

player = new bitmovin.player.Player(document.getElementById("player"), conf);

player.load(source).then(
  function () {
    console.log("Successfully loaded source"); // Success!
  },
  function () {
    console.log("Error while loading source"); // Error!
  }
);