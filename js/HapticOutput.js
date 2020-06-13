function morse(input) {
  if (localStorage.getItem("dit") == null) {
    dit = 65;
  } else {
    dit = localStorage.getItem("dit");
  }
  if (localStorage.getItem("dah") == null) {
    dah = 195;
  } else {
    dah = localStorage.getItem("dah");
  }
  if (localStorage.getItem("wordspace") == null) {
    wordSpace = 455;
  } else {
    wordSpace = localStorage.getItem("wordspace");
  }
  if (localStorage.getItem("letterspace") == null) {
    letterspace = 195;
  } else {
    letterspace = localStorage.getItem("letterspace");
  }
  const symbolSpace = letterspace,
    morseChars = {
      " ": "/",
      a: "·−`",
      b: "−···`",
      c: "−·−·`",
      d: "−··`",
      e: "·`",
      f: "··−·`",
      g: "−−·`",
      h: "····`",
      i: "··`",
      j: "·−−−`",
      k: "−·−`",
      l: "·−··`",
      m: "−−`",
      n: "−·`",
      o: "−−−`",
      p: "·−−·`",
      q: "−−·−`",
      r: "·−·`",
      s: "···`",
      t: "−`",
      u: "··−`",
      v: "···−`",
      w: "·−−`",
      x: "−··−`",
      y: "−·−−`",
      z: "−−··`",
      "1": "·−−−−`",
      "2": "··−−−`",
      "3": "···−−`",
      "4": "····−`",
      "5": "·····`",
      "6": "−····`",
      "7": "−−···`",
      "8": "−−−··`",
      "9": "−−−−·`",
      "0": "−−−−−`",
      à: "·−−·−`",
      ä: "·−·−`",
      è: "·−··−`",
      é: "··−··`",
      ö: "−−−·`",
      ü: "··−−`",
      ß: "···−−··`",
      ñ: "−−·−−`",
      ".": "·−·−·−`",
      ",": "−−··−−`",
      ":": "−−−···`",
      ";": "−·−·−·`",
      "?": "··−−··`",
      "-": "−····−`",
      _: "··−−·−`",
      "(": "−·−−·`",
      ")": "−·−−·−`",
      "'": "·−−−−·`",
      "=": "−···−`",
      "+": "·−·−·`",
      "/": "−··−·`",
      "@": "·−−·−·`",
    };

  function inputToMorse(input) {
    if (!input) {
      return;
    }
    const characters = input.toLowerCase().trim().split("");
    let output = [];
    characters.forEach((character) => {
      if (morseChars[character]) {
        output.push(morseChars[character]);
      }
    });
    return output;
  }

  function morseConvert(input) {
    let output = [];
    let morseCode = inputToMorse(input);
    if (morseCode != null) {
      morseCode.forEach((set, index) => {
        let singleCharacters = set.split("");
        singleCharacters.forEach((char) => {
          switch (char) {
            case "/":
              output.pop();
              output.push(wordSpace);
              break;
            case "·":
              output.push(dit);
              output.push(symbolSpace);
              break;
            case "−":
              output.push(dah);
              output.push(symbolSpace);
              break;
            case "`":
              output.push(0);
              output.push(letterspace);
              break;
          }
        });
        // if (output.slice(-1)[0] !== wordSpace) {
        //   output.pop();
        //   output.push(letterspace);
        // }
      });
      return output;
    }
  }

  function outputMorseCode(input) {
    console.log("test");
    let timeSequence = morseConvert(input);
    for (i = 0, len = timeSequence.length, text = ""; i < len; i++) {
      console.log("word : ", i, " value ", timeSequence[i]);
    }
    navigator.vibrate(timeSequence);
  }
  outputMorseCode(input);
}
