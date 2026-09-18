chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    const match = tab.url.match(/\/game\/(\d+)/);

    if (match && match[1]) {
      const gameId = match[1];
      const autoCrUrl = `https://carlosnatanael.github.io/AutoCR/#!/game/${gameId}`;
      chrome.tabs.create({ url: autoCrUrl });
    }
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "abrir-no-autocr" && tab.url) {
    const match = tab.url.match(/\/game\/(\d+)/);

    if (match && match[1]) {
      const gameId = match[1];
      const autoCrUrl = `https://carlosnatanael.github.io/AutoCR/#!/game/${gameId}`;

      chrome.tabs.create({ url: autoCrUrl });
    } else {
      console.error("Não foi possível extrair a ID do jogo desta URL.");
    }
  }
});