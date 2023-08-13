let checkEverything;
let ipconfig;

let countOfTabs=0;
function checkTabs(){
  chrome.windows.getAll({populate: true}, function(allWindows){
    countOfTabs = allWindows[0].tabs.length;
  });
};
checkTabs();

function lockNewTabs(){
  var allowedTestURLs = "https://www.elitmus.com/";
chrome.webNavigation.onCommitted.addListener(function (details) {
    if (!allowedTestURLs.includes(details.url)) {
        chrome.tabs.remove(details.tabId);
    }
});


chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    if (removeInfo.isWindowClosing) return;
    if (tabId === activeTestTabId) {
        chrome.tabs.create({ url: "about:blank" });
    }
});
}

fetch("https://api.ipify.org?format=json")
.then(response => response.json())
.then(data => {

    chrome.storage.local.set({ "ip": data.ip }, function() {
        console.log("IP address stored in local storage");
        ipconfig = data.ip;        
      });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

chrome.storage.local.set({ "requirementChecks": request }, function() {
    console.log("Requirement check results stored in local storage");
});

chrome.storage.local.get(['ip', 'requirementChecks'], function(items) {
    console.log(items);
    checkEverything = items;
  });
});


chrome.action.onClicked.addListener(function(tab) {
  checkTabs();
  console.log(countOfTabs);
  console.log(checkEverything);
  console.log(ipconfig);
  if(countOfTabs===1
    && checkEverything.requirementChecks.audio
    && checkEverything.requirementChecks.internet
    && checkEverything.requirementChecks.video){
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["fullscreen.js"]
  });
  lockNewTabs();
  }
});

