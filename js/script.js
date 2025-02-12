var translations = {
    "fr": "for real",
    "lol": "laugh out loud",
    "brb": "be right back",
    "btw": "by the way",
    "bff": "best friends forever",
    "imho": "in my humble opinion",
    "omg": "oh my god",
    "tmi": "too much information",
    "ttyl": "talk to you later",
    "wtf": "what the fuck",
    "yolo": "you only live once",
    "idk": "i don't know",
    "smh": "shaking my head",
    "tbh": "to be honest",
    "omw": "on my way",
    "irl": "in real life",
    "imy": "i miss you",
    "ily": "i love you",
    "idc": "i dont care",
    "ts": "this shit",
    "ts (this)": "this",
    "pmo": "piss me off",
    "n": "and",
    "sm": "so much",
    "r": "are",
    "u": "you",
    "h8": "hate",
    "vro": "bro",
    "sb": "so bad",
    "srs": "serious",
    "srsly": "seriously",
    "cz": "cause",
    "bc": "because",
    "atp": "at this point",
    "oms": "on my soul",
    "diff": "different",
    "idek": "i dont even know",
    "tf": "the fuck",
    "ptso": "put that shit on",
    "rn": "right now",
    "fyi": "for your information",
    "shkspr": "shakespeare",
    "icl": "i cant lie",
    "ngl": "not gonna lie",
    "b": "be",
    "i": "i",
    "bein": "being",
    "anm": "anymore",
    "y": "why",
    "w": "with",
    "sybau": "shut your bitch ass up",
    "wdym": "what do you mean",
    "ong": "on god",
    "js": "just",
    "mn": "man",
    "sp": "shakespeare",
    "wbu": "what about you",
    "dnt": "dont",
    "evn": "even",
    "ss": "screenshot"
};

var textbox = document.getElementById("inputText");
var resultbox = document.getElementById("outputText");
var translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", () => { // get result from the gettranslate function and display it on the result box
    var result = window.test.getTranslation(textbox.value);
    resultbox.textContent = result;
});

window.test = {
    getTranslation(text, debug = false) {
        var splitText = text.toLowerCase().split(" "); // split the text by spaces
        var newText = ""; // translated text

        for (let i = 0; i < splitText.length; i++) { // loop through every word
            let word = splitText[i];
            let punctuation = "";

            let match = word.match(/[^\w\s]+$/);
            if (match) { // if punctuation found
                punctuation = match[0];  // store the punctuation
                word = word.slice(0, -punctuation.length);  // remove punctuation from the word
            }

            if (translations[word]) { // if there was a translation found
                newText += translations[word] + punctuation + " ";
            } else {
                if (debug) {
                    console.log("Word not found: " + word);
                }
                newText += word + punctuation + " ";
            }
        }

        console.log(newText);
        return newText.trim(); // remove extra whitespace
    }
};