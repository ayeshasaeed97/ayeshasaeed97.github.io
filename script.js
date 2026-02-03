(() => {
  const root = document.documentElement;
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Theme toggle (light/dark) with localStorage
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);

  const btn = document.getElementById("themeToggle");
  if (btn) {
    const setIcon = () => {
      const t = root.getAttribute("data-theme") || "light";
      btn.querySelector(".icon").textContent = t === "dark" ? "☀" : "☾";
    };
    setIcon();

    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setIcon();
    });
  }

  // Copy email button
  const copy = document.getElementById("copyEmail");
  if (copy) {
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("asaeed8@bu.edu");
        copy.textContent = "Copied!";
        setTimeout(() => (copy.textContent = "Copy email"), 1200);
      } catch (e) {
        copy.textContent = "Copy failed";
        setTimeout(() => (copy.textContent = "Copy email"), 1200);
      }
    });
  }
})();
