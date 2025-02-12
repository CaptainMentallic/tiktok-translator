var translations = {
    "fr" : "for real",
    "lol" : "laugh out loud",
    "brb" : "be right back",
    "btw" : "by the way",
    "bff" : "best friends forever",
    "imho" : "in my humble opinion",
    "omg" : "oh my god",
    "tmi" : "too much information",
    "ttyl" : "talk to you later",
    "wtf" : "what the fuck",
    "yolo" : "you only live once",
    "idk" : "i don't know",
    "smh" : "shaking my head",
    "tbh" : "to be honest",
    "omw" : "on my way",
    "irl" : "in real life",
    "imy" : "i miss you",
    "ily" : "i love you",
    "idc" : "i dont care",
    "ts" : "this shit",
    "ts (this)" : "this",
    "pmo" : "piss me off",
    "n" : "and" ,
    "sm" : "so much",
    "r" : "are",
    "u" : "you",
    "h8" : "hate",
    "vro" : "bro",
    "sb" : "so bad",
    "srs" : "serious",
    "srsly" : "seriously",
    "cz" : "cause",
    "atp" : "at this point",
    "oms" : "on my soul",
    "diff" : "different",
    "idek" : "i dont even know",
    "tf" : "the fuck",
    "ptso" : "put that shit on",
    "rn" : "right now",
    "fyi" : "for your information",
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
    "wdym": "what do you mean"
};

var textbox = document.getElementById("inputText");
var resultbox = document.getElementById("outputText");
var translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", () => {
    var result = window.test.getTranslation(textbox.value);
    resultbox.textContent = result;
});

window.test = { 
    getTranslation(text, debug = false) {
        var splitText = text.split(" ");
        var newText = "";
        
        for (let i = 0; i < splitText.length; i++) {
            if (translations[splitText[i]]) {
                newText += translations[splitText[i]] + " ";
            } else {
                if (debug) {
                    console.log("Word not found: " + splitText[i]);
                }
                newText += splitText[i] + " ";
            }
        }
        
        console.log(newText);
        return newText.trim();
    }
}