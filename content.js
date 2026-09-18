(function () {

  const match = window.location.pathname.match(/\/game\/(\d+)/);

  if (match && match[1]) {
    const gameId = match[1];
    const autoCrUrl = `https://carlosnatanael.github.io/AutoCR/#!/game/${gameId}`;

    const button = document.createElement("button");
    button.innerText = "AutoCR";
    button.title = "Abrir o AutoCR";

    Object.assign(button.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "999999",
      padding: "8px 12px",
      backgroundColor: "#161616",
      color: "#ffffff",
      border: "1px solid #161616",
      borderRadius: "6px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "0.5px",
      cursor: "pointer",
      transition: "all 0.2s ease"
    });

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#161616";
      button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#161616";
      button.style.transform = "translateY(0)";
    });

    button.addEventListener("click", () => {
      window.open(autoCrUrl, "_blank");
    });

    document.body.appendChild(button);
  }
})();