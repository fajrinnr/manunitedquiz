function check(){

var question1 = document.kuis.question1.value;
var question2 = document.kuis.question2.value;
var question3 = document.kuis.question3.value;
var bener = 0;

if (question1 == "tiga") {
    bener++
}
if (question2 == "duapuluh") {
    bener++
}
if (question3 == "EVDS") {
    bener++
}

var pesan = ["Anjay, jawaban bener semua!", "Yah dikit lagi perfect, tapi keren kok!", "Waduh kok gaada yang bener:("];
var score;

if (bener == 0) {
    score = 2;
}

if (bener > 0 && bener < 3) {
    score = 1;
}

if (bener == 3) {
    score = 0;
}
document.getElementById("submit").style.visibility = "visible";

document.getElementById("pesan").innerHTML = pesan[score];
document.getElementById("bener").innerHTML = "Kamu berhasil menjawab " + bener + " soal."
}