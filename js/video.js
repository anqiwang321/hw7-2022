var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window")
    video = document.querySelector("#player1");
    video.autoplay = false;
    console.log("Autoplay is set to " + video.autoplay);
    video.loop = false;
    console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
    console.log("Slow Down Video");
    video.playbackRate *= 0.95;
    console.log("Playback rate is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
    console.log("Speed Up Video");
    video.playbackRate /= 0.95;
    console.log("Playback rate is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
    console.log("Skip ahead");
    video.currentTime += 15;
    if (video.currentTime >= video.duration)
        video.currentTime = 0;
    console.log("Current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute Video");
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
    } else {
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("change", function() {
    console.log("Changing volume");
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Add Old School Filter");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Remove Old School Filter");
    video.classList.remove("oldSchool");
});

document.querySelector("#speed").addEventListener("click", function() {
    console.log("Increase Speed");
    if (video.playbackRate >= 0.05) {
        video.playbackRate -= 0.05;
        console.log("Playback rate is " + video.playbackRate);
    }
});

document.querySelector("#slow").addEventListener("click", function() {
    console.log("Decrease Speed");
    if (video.playbackRate <= 2) {
        video.playbackRate += 0.05;
        console.log("Playback rate is " + video.playbackRate);
    }
});
