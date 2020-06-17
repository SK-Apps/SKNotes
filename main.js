const { app, BrowserWindow, Menu } = require("electron");

// Creates the browser window
function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  let menu = Menu.buildFromTemplate([
    {
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
    },
    {
      label: "Edit",
      submenu: [
        { label: "Copy", role: "Copy", accelerator: "CommandOrControl+C" },
        { label: "Paste", role: "Paste", accelerator: "CommandOrControl+V" },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);

  // Loads the index.html of the app
  win.loadFile("src/index.html");
}

/*
 * This method will be called when Electron has finished initialization and is ready to create
 * browser windows. Some APIs can only be used after this event occurs.
 */
app.whenReady().then(createWindow);

/*
 * Quit when all windows are closed, except on macOS. On macOS, it is common for applications
 * and their menu bar to stay active until the user quits explicitly with Cmd+Q.version
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
