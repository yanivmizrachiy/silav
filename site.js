async function loadInclude(targetSelector, url) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const response = await fetch(url, { cache: "no-cache" });
  if (!response.ok) return;

  target.innerHTML = await response.text();
}

function setYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = year;
  });
}

(async function init() {
  await loadInclude("#site-header", "./includes/header.html");
  await loadInclude("#site-footer", "./includes/footer.html");
  setYear();
})();
