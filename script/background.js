function checkForValidURL(tabId, changeInfo, tab) {
  const validUrls = ['ap2.shu.edu.tw', 'ap3.shu.edu.tw', 'ap4.shu.edu.tw'];
  if (tab.status === 'complete' && validUrls.some((url) => tab.url.includes(url))) {
    chrome.pageAction.show(tabId);
    _gaq.push(['_trackEvent', 'View', 'entered', 'Website', 1, true]);
  } else {
    chrome.pageAction.hide(tabId);
  }
}
chrome.tabs.onUpdated.addListener(checkForValidURL);

function onPageActionClicked(tab) {
  _gaq.push(['_trackEvent', 'Button', 'clicked']);
  chrome.tabs.executeScript(tab.id, {
    file: 'script/inject.js'
  });
};
chrome.pageAction.onClicked.addListener(onPageActionClicked);