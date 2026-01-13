
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {
  const value = searchBox.value.trim();
  if (!value) return;

  const query = encodeURIComponent(value);

  // YouTube Last Hour filter
  const lastHourFilter = "EgIIAQ%3D%3D";

  const url =
    `https://www.youtube.com/results?search_query=${query}&sp=${lastHourFilter}`;

  window.open(url, "_blank");

  // Clear input
  searchBox.value = "";
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(registration => {
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' &&
            navigator.serviceWorker.controller) {
          if (confirm("A new version is available. Update now?")) {
            newWorker.postMessage('skipWaiting');
            window.location.reload();
          }
        }
      });
    });
  });

  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) reg.update();
    });
  });
}
