const targetDomain = "https://mathlive.engineeringpaper.pages.dev";

chrome.contextMenus.create({
  id: "domainSwapper",
  title: `Open link at ${targetDomain}`,
  contexts:["link"],
  targetUrlPatterns: ["https://engineeringpaper.xyz/*"],
});

chrome.contextMenus.onClicked.addListener( (info, tab) => {
  if (info.menuItemId === "domainSwapper") {
    const url = new URL(info.linkUrl);
    chrome.windows.create({ url: `${targetDomain}${url.pathname}`, type: "normal" });
  }
});
