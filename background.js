let isHidden = true
chrome.action.onClicked.addListener((tab) => {
  if (isHidden) {
    chrome.scripting.insertCSS({
      files: ["show-trending.css"],
      target: { tabId: tab.id }
    });
    isHidden = false
  } else {
    chrome.scripting.insertCSS({
      files: ["hide-trending.css"],
      target: { tabId: tab.id }
    });
    isHidden = true
  }
});
