chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  if (tab.url.indexOf("https://helpouts.google.com/yourhelpouts") > -1) {
    // this should run the "injectGPlus.js" script whenever you
    // reload a tab whose URL matches the Helpouts string above.
    // This should also match the URL for Past Helpouts, which includes
    // a parameter of ?pastRole=PROVIDER_AND_CONSUMER
    chrome.tabs.executeScript(tabId, {file: "injectGPlus.js"});
  }
});
