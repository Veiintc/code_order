const {app} =require("electron")
const {autoUpdater} =require("electron-updater")
app.whenReady().then(e=>{
    autoUpdater.checkForUpdates();
})