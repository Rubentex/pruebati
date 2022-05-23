if (location.protocol === "file:") {
    document.getElementById("webserver-warning").style.display = "block";
  }

  var player = bitdash("player");

  var conf = {
    key:              "11d3698c-efdf-42f1-8769-54663995de2b",
    source: {
      dash:           "",
      hls:            "https://spliktv-nhl004@d21gtq1mno4siw.cloudfront.net/out/v1/c7889d78bfa643dc9079c46c81be4b6d/index.m3u8"
    },
    style: {
      width:          "100%",
      aspectratio:    "16:9",
      controls:       true
    }
  };

  player.setup(conf).then(function(value) {
    // Success
    console.log("Successfully created bitmovin player instance");
  }, function(reason) {
    // Error!
    console.log("Error while creating bitmovin player instance");
  });