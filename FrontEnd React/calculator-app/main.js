const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration
    },
  });

  // Load the React app
  win.loadURL('http://localhost:3000'); // Assuming your React app runs on localhost:3000

  // Open the DevTools (optional)
  win.webContents.openDevTools();
}

// Create the Electron window when the app is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Activate the app (macOS specific)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
