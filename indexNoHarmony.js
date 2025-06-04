process.env.NODE_CONFIG_DIR = __dirname + "/config"; //this way you can easily run it from other locations
const config = require("config");
const { hideConsole } = require("node-hide-console-window");
var lgtv = require("lgtv2")({
	url: `ws://${config.get("lgIp")}:3000`,
});
//used to press play/pause on windows, same as the one without -fork but build by third party
const { keyboard, Key } = require("@nut-tree-fork/nut-js");

lgtv.on("error", function (err) {
	console.log(err);
});
let previousMuted = 0;
lgtv.on("connect", () => {
	console.log("connected");

	//only hide console if user wants it.
	if (config.get("hideConsole")) {
		hideConsole();
	}
	lgtv.subscribe("ssap://audio/getVolume", async (err, res) => {
		if (res.changed.indexOf("muted") !== -1) {
			if (res.muted != previousMuted) {
				//so that volume changes don't trigger the play/pause.
				previousMuted = res.muted;
				//console.log(res.muted ? "muted" : "unmuted");
				playPauseKeyboard(res.muted);
			}
		}
	});
});

async function playPauseKeyboard(mutedEvent) {
	// Even though the two keys exist they both seem to do the same. But will keep them seperate just in case
	if (mutedEvent) {
		await keyboard.type(Key.AudioPause);
	} else {
		await keyboard.type(Key.AudioPlay);
	}
}
