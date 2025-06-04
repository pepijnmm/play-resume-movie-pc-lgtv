# Introduction
Just a simpel script that plays and pauses movies based on the LG remote mute and unmute action.
I use logitech harmony myself too. I just it as I don't want my pc to get keyboard interactions while watching other stuff on my tv.
If you don't have or want to use harmony then go to the setup without harmony.

# TODO
Find a way so AudioPlay AudioPause won't both start and pause. As now either could be used to play for example.


# Setup:
1. run `npm i`
2. copy `default.json.example` and rename that to `default.json`
3. fill in the `default.json` get lgIp and harmonyIp through your router.
4. to get harmonyActivityIdPc run `npm run getActivityId` while having the pc activity active(as in in use)
5. run `npm start`
6. For the first time: you will have to accept the smart app on your tv.

# Setup without harmony:
1. run `npm i`
2. copy `default.json.example` and rename that to `default.json`
3. fill in the `default.json` get lgIp through your router, you can leave the rest.
4. run `npm run startNoHarmony`
5. For the first time: you will have to accept the smart app on your tv.

# Extra options
hideConsole can be set to true if you want to hide the terminal on startup. it's made for windows.

# To start:
Either `npm start` or `npm run startNoHarmony` based on your setup.

# Remote use
The mute button can be used to pause and play. other then the volume buttons I could not find a way to listen in on any other useful buttons.
It can happen that you are out of sync between the pc pause and tv mute. then just use your pc to sync them again.
