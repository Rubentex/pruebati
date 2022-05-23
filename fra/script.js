var config = {
        key: 'c6d7e091-e62e-4bda-819f-99bb13506fba',
        logs: {
          level: 'debug'
        },
        playback: {
          preferredTech: [
            {
          player: 'html5',
          streaming: 'Dash'
        }, {
          player: 'html5',
          streaming:'hls'
        }, {
          player: 'html5',
          streaming: 'smooth'
        }, {
          player: 'native',
          streaming: 'hls'
        }, {
          player: 'native',
          streaming: 'progressive'
        }]
        }
    };

    var source = {
        hls: 'https://spliktv-nhl004@d21gtq1mno4siw.cloudfront.net/out/v1/c7889d78bfa643dc9079c46c81be4b6d/index.m3u8'
    }

    var container = document.getElementById('my-player');
    var player = new bitmovin.player.Player(container, config);
    player.load(source).then(
        function(value) {
            // Success
            console.log('Successfully created bitmovin player instance');
        },
        function(reason) {
            // Error!
            console.log('Error while creating bitmovin player instance');
        }
    );