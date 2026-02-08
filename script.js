let vConsole = null;

const iframe = document.getElementById("game-iframe");
const launcher = document.getElementById("launcher");
const backBtn = document.getElementById("back-btn");
const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".launcher-card");

searchInput.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector(".launcher-title").textContent.toLowerCase();
    if (title.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

cards.forEach(card => {
  card.addEventListener("click", () => {
    const url = card.dataset.url;

    iframe.src = url;
    iframe.style.display = "block";
    launcher.style.display = "none";
    backBtn.style.display = "block";

    if (!vConsole) {
      vConsole = new window.VConsole();
    }

    console.log(
      "%c LOADED ",
      "background:#000;color:" + getComputedStyle(card).color + ";padding:2px 6px;border-radius:4px",
      url
    );
  });
});

backBtn.addEventListener("click", () => {
  iframe.style.display = "none";
  iframe.src = "about:blank"; 
  
  if (vConsole) {
    vConsole.destroy();
    vConsole = null;
  }
  
  launcher.style.display = "flex";
  backBtn.style.display = "none";
});