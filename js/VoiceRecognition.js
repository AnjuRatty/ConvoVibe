window.SpeechRecognition =
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition ||
  window.oSpeechRecognition ||
  window.SpeechRecognition;
let finalTranscript = "";
let recognition = new window.SpeechRecognition();
/** Configuring SpeechRecognition**/
recognition.interimResults = true;
recognition.maxAlternatives = 10;
recognition.continuous = true;

recognition.onresult = (event) => {
  let interimTranscript = "";
  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      var split = transcript.substring(0, transcript.Length / 2);
      finalTranscript = transcript;
      morse(finalTranscript);
    } else {
      interimTranscript += transcript;
    }
  }
  console.log(finalTranscript);
  document.querySelector("transcript").innerHTML = finalTranscript;
};
recognition.start();

recognition.onend = function () {
  recognition.start();
};
