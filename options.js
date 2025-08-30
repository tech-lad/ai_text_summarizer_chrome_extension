document.addEventListener("DOMContentLoaded", () => {
    // if previously the API key is stored
    chrome.storage.sync.get(["geminiApiKey"], (result) => {
        if(result.geminiApiKey) {
            document.getElementById("api-key").value = result.geminiApiKey;
        }
    });

    // Setting the Gemini API key
    document.getElementById("save-button").addEventListener("click", () => {
        const apiKey = document.getElementById("api-key").value.trim();

        if(apiKey) {
            chrome.storage.sync.set({geminiApiKey: apiKey}, () => {
                const successMsg = document.getElementById("success-message");
                successMsg.style.display = "block";

                // close the tab after the success Message
                setTimeout(() => {
                    window.close();
                    // if window doesn't close
                    chrome.tabs.getCurrent((tab) => {
                        if(tab) {
                            chrome.tabs.remove(tab.id);
                        }
                    });
                }, 2000);
            });
        }
    });
});