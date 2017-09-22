
let chrome = window.chrome;

const isIncognito = () => {

};

const isInExtension = () => {

};

const getCurrentTab = (callback) => {
  if (chrome.tabs) {
    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
      callback(tabs[0]);
    });
  }
  else {
    callback(null);
  }
}

const getCurrentUrl = (callback) => {
  if (chrome.tabs) {
    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
      // chrome.tabs.query invokes the callback with a list of tabs that match the
      // query. When the popup is opened, there is certainly a window and at least
      // one tab, so we can safely assume that |tabs| is a non-empty array.
      // A window can only have one active tab at a time, so the array consists of
      // exactly one tab.
      const tab = tabs[0];

      // A tab is a plain object that provides information abonInputEnteredt the tab.
      // See https://developer.chrome.com/extensions/tabs#type-Tab
      const url = tab.url;

      // tab.url is only available if the "activeTab" permission is declared.
      // If you want to see the URL of other tabs (e.g. after removing active:true
      // from |queryInfo|), then the "tabs" permission is required to see their
      // "url" properties.
      console.assert(typeof url == 'string', 'tab.url should be a string');

      callback(url);
    });
  }
  else {
    callback(window.location.toString());
  }
};


export default {
  getCurrentTab,
  getCurrentUrl
};