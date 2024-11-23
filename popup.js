window.addEventListener("load", function () {
  document
    .getElementById("redirect-button")
    .addEventListener("click", async () => {
      const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (tabs.length > 0) {
        const url = new URL(tabs[0].url);
        if (url.hostname.includes("youtube.com") && url.searchParams.get("v")) {
          const videoId = url.searchParams.get("v");
          const newUrl = `http://localhost:3000/dashboard?v=${videoId}`;
          window.open(newUrl);
          window.close();
        } else {
          const element = document.createElement("p");
          if (this.document.getElementById("error") != null) return;
          element.innerText =
            "Please open a YouTube video page to use this feature.";
          element.className = "error";
          element.id = "error";
          const parent = this.document.getElementsByClassName("content")[0];
          parent.appendChild(element);
        }
      } else {
        element.innerText = "No active tab found.";
        element.className = "error";
        element.id = "error";
        const parent = this.document.getElementsByClassName("content")[0];
        parent.appendChild(element);
      }
    });
});
