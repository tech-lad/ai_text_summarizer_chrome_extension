chrome.runtime.onInstalled.addListener(() => {
    // this will ask for the API key on first install
    chrome.storage.sync.get(["geminiApiKey"], (result) => {
        if(!result.geminiApiKey) {
            chrome.tabs.create({
                url: "options.html",
            });
        }
    });
});