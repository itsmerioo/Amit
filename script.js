const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("paste", () => {
  setTimeout(() => {
    const query = searchBox.value.trim();
    if (!query) return;

    // YouTube Last Hour filter
    const filterCode = "EgIIAQ%3D%3D";

    const url =
      `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=${filterCode}`;

    // Redirect to YouTube
    window.location.href = url;

    // Clear input box
    searchBox.value = "";
  }, 50);
});
