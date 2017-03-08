
import electron from 'electron';
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;


var client = null;
if (process.env.NODE_ENV === 'hot') {
  console.log('Hot Load detected.');
  client = require('electron-connect').client;    // Live-reloader
}


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = [null, null];
const pages = ['index.html', 'example.html'];

function createWindow (page) {
  // Create the browser window.
  const win = new BrowserWindow({width: 700, height: 860})
  const url = 'file://' + __dirname + '/public/' + page;
  win.loadURL(url);

  if (process.env.NODE_ENV === 'hot') {
     // Open the DevTools.
     win.webContents.openDevTools()
  }

  // only attach electron-connect when live loading
  if (client !== null) {
     client.create(win);
   }

  return win;
}

function createWindows () {
  for (let i=0; i<pages.length; i++) {
    if (win[i] == null) {
       win[i] = createWindow(pages[i]);
       // Emitted when the window is closed.
       win[i].on('closed', function () { win[i] = null; })
     }
   }
 }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindows)

// On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', createWindows)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
