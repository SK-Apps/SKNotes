const path = require("path");
const url = require("url");
const customTitlebar = require("custom-electron-titlebar");
const { remote } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  // Menu bar creation
  const menu = new remote.Menu();
  menu.append(
    new remote.MenuItem({
      label: "File",
      submenu: [
        { label: "New File", accelerator: "CommandOrControl+N" },
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
        { label: "Undo", role: "undo", accelerator: "CommandOrControl+Z" },
        { label: "Redo", role: "redo", accelerator: "CommandOrControl+Y" },
        { type: "separator" },
        { label: "Cut", role: "cut", accelerator: "CommandOrControl+X" },
        { label: "Copy", role: "copy", accelerator: "CommandOrControl+C" },
        { label: "Paste", role: "paste", accelerator: "CommandOrControl+V" },
        {
          label: "Select All",
          role: "selectAll",
          accelerator: "CommandOrControl+A",
        },
      ],
    })
  );

  // Titlebar/menu bar creation
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
