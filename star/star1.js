<html>
   <head>
      <meta name="theme-color" content="black">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <meta name="referrer" content="never">
      <meta name="referrer" content="no-referrer">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <script src="//cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/level-selector@latest/dist/level-selector.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/clappr-chromecast-plugin@latest/dist/clappr-chromecast-plugin.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/clappr-pip@latest/dist/clappr-pip.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/dash-shaka-playback@latest/dist/dash-shaka-playback.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/p2p-media-loader-core@latest/build/p2p-media-loader-core.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/p2p-media-loader-hlsjs@latest/build/p2p-media-loader-hlsjs.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/clappr-playback-rate-plugin@latest/dist/clappr-playback-rate-plugin.min.js"></script>
 <style>
        body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body data-autofill-highlight="false">
<div id="megadeportes"></div>
<script>
var player = new Clappr.Player({parentId: "#megadeportes", mimeType: "application/dash+xml", source: "https://live-llc-sa-east-2.media.starott.com/gru1/qb01/starplus/event/2022/04/21/Mushuc_Runa_vs_Macar_20220421_1650558032023/ctr-all-sliding.m3u8?v=1&hash=bb4da1e0d73e4ba1c49f4641630613c52ee85b76", plugins: [LevelSelector, DashShakaPlayback, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, Clappr.MediaControl], events: {onReady: function () {
      var ascia = this.getPlugin("click_to_pause");
      ascia && ascia.disable();
    }}, width: "100%", height: "100%", autoPlay: false, shakaConfiguration: {drm: {clearKeys: {"bebb54bda15d44289543d86ab5cd37c2": "a123fd2c4583f83cc5895cbb80dd1b02"}}}, playbackRateConfig: {defaultValue: "1.00x", options: [{value: "0.10", label: "0.10x"}, {value: "0.25", label: "0.25x"}, {value: "0.50", label: "0.50x"}, {value: "0.75", label: "0.75x"}, {value: "1.00", label: "1.00x"}, {value: "1.25", label: "1.25x"}, {value: "1.50", label: "1.50x"}, {value: "1.75", label: "1.75x"}, {value: "2.00", label: "2.00x"}]}});
;
</script>
</body></html>