const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const {
  default: installExtension,
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS
} = require("electron-devtools-installer");

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

app.on("ready", () => {
  installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));

  createWindow();
});
