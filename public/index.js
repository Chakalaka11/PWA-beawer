var deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log(deferredPrompt);
  console.log(deferredPrompt.userChoice);
  deferredPrompt.userChoice
    .then((e)=>{
      console.log("User choice then");
      console.log(e);
    })
    .catch((e)=>{
      console.log("User choice catch");
      console.log(e);
    })
  console.log(`'beforeinstallprompt' event was fired.`);
});

function showPrompt()
{
  deferredPrompt.prompt();
}


// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("./serviceWorker.js")
    .then(() => {
      console.info("Service Worker installed successfully!");
    })
    .catch((error) => {
      console.warn("Service Worker wasn't installed!");
      console.warn("Error below");
      console.warn(error);
    })
}
else {
  console.warn("Service Worker isn't supported")
}

