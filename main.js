// import { app, BrowserWindow, Menu, dialog } from 'electron'
const { app, BrowserWindow } = require('electron')

let mainWindow = null
let willQuit = false

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 780,
    maxWidth: 780,
    height: 130,
    fullscreenable: false,
    resizable: true,
    frame: false,
    transparent: true
  })
  mainWindow.setAlwaysOnTop(true)
  mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', () => {
  createWindow()

  mainWindow.on('close', (e) => {
    if (willQuit) {
      mainWindow = null
    } else {
      e.preventDefault()
      mainWindow.hide()
    }
  })
})

app.on('activate', () => mainWindow.show())
app.on('before-quit', () => willQuit = true)
