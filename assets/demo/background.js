var optionsPage = function() {
  var page = "options.html";
  var pageUrl = chrome.extension.getURL(page); 
  chrome.tabs.query({}, function(extensionTabs) {
    var found = false;
    for (var i=0; i < extensionTabs.length; i++) {
      if (pageUrl == extensionTabs[i].url) {
        found = true;
        console.log("tab id: " + extensionTabs[i].id);
        chrome.tabs.update(extensionTabs[i].id, {"selected": true});
      }
    }
    if (found === false) {
      chrome.tabs.create({url: page});
    }
  });
};

chrome.runtime.onInstalled.addListener(function() {
  optionsPage();
});

chrome.browserAction.onClicked.addListener(function(tab) {
  optionsPage();
});