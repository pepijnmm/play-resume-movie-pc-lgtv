const config = require("config");
const { getHarmonyClient } = require("@harmonyhub/client-ws");

getHarmonyClient(config.get("harmonyIp")).then(async (harmony) => {
	let getActivity = await harmony.getCurrentActivity();
	console.log("your current activity ID is:", getActivity);
	process.exit(1);
});
