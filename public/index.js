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