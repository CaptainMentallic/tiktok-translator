var webhookUrl = "process.env.DISCORD_WEBHOOK_URL";

// convert formdata to object
function formDataToObject(formData) {
    const formObject = {};
    formData.forEach((value, key) => {
        if (formObject[key]) {
            if (!Array.isArray(formObject[key])) {
                formObject[key] = [formObject[key]];
            }
            formObject[key].push(value);
        } else {
            formObject[key] = value;
        }
    });
    return formObject;
}

// post to discord webhook
function postToDiscord(json, isFormData = false) {
    fetch(webhookUrl, {
        method: "POST",
        headers: isFormData
            ? {}
            : {
                "Content-Type": "application/json",
            },
        body: isFormData ? json : JSON.stringify(json),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            if (text) {
                try {
                    alert("Suggestion submitted successfully, thank you!");
                    const data = JSON.parse(text);
                    console.log("Message sent:", data);
                } catch (parseError) {
                    alert("Suggestion submitted successfully, thank you!");
                    console.log("Message sent, but response is not valid JSON:", text);
                }
            } else {
                alert("Suggestion submitted successfully, thank you!");
                console.log("Message sent successfully.");
            }
        })
        .catch(error => {
            alert("There was an error sending the suggestion, please try again later.");
            console.error("Error sending message:", error);
        });
}

// page load
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("suggestion-popup");
    var form = document.getElementById("suggestion-form");
    var button = document.getElementById("suggestion-button");
    var closeBtn = document.querySelector(".popup .close");

    var embedColor = 5814783;

    // open feedback popup
    button.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
    });

    // close feedback popup
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // close on outside click
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        };
    });

    // form submit
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var formObject = formDataToObject(formData);

        if (formObject.message.length > 1950) {
            alert("Your suggestion is too long!");
            return;
        }

        var embed = {
            title: "New suggestion!",
            description: formObject.message,
            color: embedColor,
            timestamp: new Date().toISOString()
        };

        postToDiscord({
            content: null,
            embeds: [embed]
        });

        form.reset();
        popup.style.display = "none";
    });
});