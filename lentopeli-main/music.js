// musicPlayer.js

var audioPlayer = document.getElementById("musicPlayer");
var playlist = [
    "path/to/your/track1.mp3",
    "path/to/your/track2.mp3",
    "path/to/your/track3.mp3"
    // soittolista
];
var currentTrackIndex = 0;
var crossfadeDuration = 5; // Crossfaden kesto

function playNextTrack() {
    // soittaa seuraavan raidan soittolistalta/looppaa takaisin ekaan raitaan, jos seuraava ei ole
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();

    // Increment the track index or reset to 0 if at the end of the playlist
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
}

// Add an event listener to check when the audio has finished playing
audioPlayer.addEventListener("ended", function () {
    // Crossfade effect: fade out the current track
    var fadeOut = setInterval(function () {
        if (audioPlayer.volume > 0.1) {
            audioPlayer.volume -= 0.1;
        } else {
            clearInterval(fadeOut);
            // Play the next track in the playlist
            playNextTrack();
        }
    }, crossfadeDuration * 100); // Multiply by 100 to convert seconds to milliseconds
});

// Start playing the first track automatically
playNextTrack();

// Crossfade effect: fade in the first track
var fadeIn = setInterval(function () {
    if (audioPlayer.volume < 1.0) {
        audioPlayer.volume += 0.1;
    } else {
        clearInterval(fadeIn);
    }
}, crossfadeDuration * 100);
