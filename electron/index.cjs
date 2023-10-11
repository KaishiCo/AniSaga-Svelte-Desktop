//starting point
const { app, BrowserWindow } = require("electron");
const { join } = require("path");

app.whenReady().then(main);

function main () {

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            preload: join(__dirname, '../preload.cjs')
        },
    });

    mainWindow.loadFile(join(__dirname, "../public/index.html"));
}
