// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const path = require("path");
const url = require("url");
const customTitlebar = require("custom-electron-titlebar");
const { remote } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const menu = new remote.Menu();
  menu.append(
    new remote.MenuItem({
      label: "File",
      submenu: [
        {
          label: "New File",
          accelerator: "CommandOrControl+N",
        },
        { label: "New Window", accelerator: "CommandOrControl+Shift+N" },
        { type: "separator" },
        { label: "Open File", accelerator: "CommandOrControl+O" },
        { label: "Open Folder", accelerator: "CommandOrControl+Shift+O" },
        { type: "separator" },
        { label: "Save", accelerator: "CommandOrControl+S" },
        { label: "Save As", accelerator: "CommandOrControl+Shift+S" },
        { type: "separator" },
        { label: "Exit", role: "quit" },
      ],
    })
  );
  menu.append(
    new remote.MenuItem({
      label: "Edit",
      submenu: [
        { label: "Copy", role: "Copy", accelerator: "CommandOrControl+C" },
        { label: "Paste", role: "Paste", accelerator: "CommandOrControl+V" },
      ],
    })
  );

  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex("#262427"),
    icon: url.format(path.join(__dirname, "/images", "/icon.png")),
    menu: menu,
  });

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
});
