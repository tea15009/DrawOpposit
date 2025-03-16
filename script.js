document.getElementById("promptForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let promptText = document.getElementById("prompt").value;
    
    // Save to Google Sheets (optional) or use Google Forms
    let googleFormURL = "https://docs.google.com/forms/d/1HatzAsg8RYMNai_IAqtfTW_85Ib34uSCLzUTYsKm9WU/prefill";
    let formData = new FormData();
    formData.append("1HatzAsg8RYMNai_IAqtfTW_85Ib34uSCLzUTYsKm9WU", promptText);

    fetch(googleFormURL, { method: "POST", body: formData })
        .then(() => {
            document.getElementById("message").style.display = "block";
            document.getElementById("promptForm").reset();
        })
        .catch(error => console.error("Error:", error));
});
