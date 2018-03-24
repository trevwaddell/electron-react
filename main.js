const {
  default: installExtension,
  REDUX_DEVTOOLS
} = require("electron-devtools-installer");

installExtension(REDUX_DEVTOOLS)
  .then(name => console.log(`Added Extension:  ${name}`))
  .catch(err => console.log("An error occurred: ", err));

const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;

const path = require("path");
const url = require("url");

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "public/index.html"),
      protocol: "file:",
      slashes: true
    })
  );
}

ipcMain.on("UI_MOUNTED", (e, data) => {
  console.log(data, "=================");
});

app.on("ready", createWindow);
