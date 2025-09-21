function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    icon.textContent = "🌙";
  } else {
    icon.textContent = "☀️";
  }
}
