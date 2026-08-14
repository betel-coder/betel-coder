document.addEventListener("DOMContentLoaded", () => {
    const askBtn = document.getElementById("ask-btn");
    const userInput = document.getElementById("user-input");
    const responseArea = document.getElementById("response-area");

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Show thinking status
        responseArea.innerText = "Thinking...";
        askBtn.disabled = true;

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();

            if (response.ok) {
                responseArea.innerText = data.response;
            } else {
                responseArea.innerText = `Error: ${data.error || "Failed to retrieve response."}`;
            }
        } catch (error) {
            responseArea.innerText = "Error: Could not reach the server.";
        } finally {
            askBtn.disabled = false;
            userInput.value = "";
        }
    }

    askBtn.addEventListener("click", sendMessage);

    // Press 'Enter' to submit
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
});