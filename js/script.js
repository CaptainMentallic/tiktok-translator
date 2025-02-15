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
    "shkspre": "shakespeare",
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
    "ss": "screenshot",
    "stfu": "shut the fuck up",
    "dem": "them",
    "den": "then",
    "gng": "gang",
    "ac": "actually",
    "sus": "suspicious",
    "istg": "i swear to god",
    "gaf": "gave a fuck",
    "acc": "actually",
    "onb": "on bro",
    "wt": "what",
    "vxblts": "vexbolts",
    "ty": "thank you",
    "tysm": "thank you so much",
    "plz": "please",
    "pls": "please",
    "rlly": "really",
    "yall": "you all",
    "nga": "ni**a",
    "waf": "whats a father",
    "fp": "friggin packet",
    "fyp": "for you page",
    "nm": "no more",
    "gtg": "got to go",
    "atm": "at the moment",
    "ik": "i know",
    "lmk": "let me know",
    "nty": "no thank you",
    "br": "bro",
    "pyo": "put you on",
    "dih": "d*ck",
    "wl": "will",
    "btchks": "bitchass",
    "slp": "slap",
    "msv": "massive",
    "nt": "not",
    "hrd": "hard",
    "crzy": "crazy",
    "ahh": "ass",
    "chigga": "chinese ni**a",
    "rsn": "reason",
    "nvr": "never",

    // huzz translations
    "bruzz": "bro huzz",
    "chuzz": "chopped huzz",
    "guzz": "gay huzz"
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
        return text.replace(/\b\w+\b/g, (word) => { // pattern matching all whole words found
            let lowerWord = word.toLowerCase();
            if (translations[lowerWord]) {
                return translations[lowerWord];  // replace word if found
            } else {
                if (debug) console.log("Word not found: " + word);
                return word; // keep same word if not found
            }
        });
    }
};
