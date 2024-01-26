//
// function playRandomSound(){
//     var sounds = [
//         "audio/outuby_exeos.mp3",
//         "audio/outuby_skush.mp3",
//         "audio/outuby_exeos.mp3",
//         "audio/outuby_skush.mp3",
//         "audio/outuby_justin.mp3",
//         "audio/outuby_matthew.mp3",
//         "audio/outuby_joey.mp3",
//         "audio/outuby_petermann.mp3",
//         "audio/outuby_gaffi.mp3",
//         // "assets/audio/outuby_GLaDOS_15ai.wav",
//         // "assets/audio/outuby_HAL 9000_15ai.wav",
//         "audio/outuby_Peter.wav",
//         // "assets/audio/outuby_Rise Kajukawa_15ai (1).wav",
//         // "assets/audio/outuby_Rise Kajukawa_15ai (2).wav",
//         "audio/outuby_sans.wav",
//         // "assets/audio/outuby_Sentry Turret_15ai.wav",
//         // "assets/audio/outuby_SpongeBob_15ai.wav",
//         "audio/outuby_Walter White.wav",
//
//     ];
//
//
//     var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
//     document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
//     console.log(soundFile)
// }

function playRandomSound() {
    var sounds = [
        "audio/outuby_exeos.mp3",
        "audio/outuby_skush.mp3",
        "audio/outuby_exeos.mp3",
        "audio/outuby_skush.mp3",
        "audio/outuby_justin.mp3",
        "audio/outuby_matthew.mp3",
        "audio/outuby_joey.mp3",
        "audio/outuby_petermann.mp3"
    ];

    var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
    document.getElementById("player").innerHTML = "<embed src=\"" + soundFile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}


function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-volume-xmark');
    icon.classList.toggle('fa-volume-high');

    anchor.querySelector("span").textContent = icon.classList.contains('fa-volume-xmark') ? " " : " ";
}