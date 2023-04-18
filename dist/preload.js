// Vencord cb3bd4b
// Standalone: false
// Platform: win32
"use strict";function E(e,n=300){let r;return function(...T){clearTimeout(r),r=setTimeout(()=>{e(...T)},n)}}function u(e){let n={};for(let r in e)n[r]=e[r],n[e[r]]=r;return Object.freeze(n)}var s=u({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"});var t=require("electron"),m=require("fs"),p=require("path");var o=require("electron");function c(e){if(!(e in s))throw new Error(`Event ${e} not allowed.`)}var d={getVersions:()=>process.versions,ipc:{send(e,...n){c(e),o.ipcRenderer.send(e,...n)},sendSync(e,...n){return c(e),o.ipcRenderer.sendSync(e,...n)},on(e,n){c(e),o.ipcRenderer.on(e,n)},off(e,n){c(e),o.ipcRenderer.off(e,n)},invoke(e,...n){return c(e),o.ipcRenderer.invoke(e,...n)}}};t.contextBridge.exposeInMainWorld("VencordNative",d);if(location.protocol!=="data:"){let e=(0,p.join)(__dirname,"renderer.css"),n=document.createElement("style");n.id="vencord-css-core",n.textContent=(0,m.readFileSync)(e,"utf-8"),document.readyState==="complete"?document.documentElement.appendChild(n):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(n),{once:!0}),process.env.DISCORD_PRELOAD&&(t.webFrame.executeJavaScript((0,m.readFileSync)((0,p.join)(__dirname,"renderer.js"),"utf-8")),require(process.env.DISCORD_PRELOAD))}else t.contextBridge.exposeInMainWorld("setCss",E(e=>d.ipc.invoke(s.SET_QUICK_CSS,e))),t.contextBridge.exposeInMainWorld("getCurrentCss",()=>d.ipc.invoke(s.GET_QUICK_CSS)),t.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map