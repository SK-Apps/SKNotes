const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

// Creates the browser window
function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  // Loads the index.html of the app
  win.loadFile("src/index.html");
  //win.webContents.openDevTools();
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
