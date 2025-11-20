document.addEventListener("DOMContentLoaded", () => {
  const yearsExp = 16;
  const projectsCount = 40;

  document.querySelectorAll(".years-exp").forEach(el => {
    el.textContent = yearsExp;
  });

  document.querySelectorAll(".projects-count").forEach(el => {
    el.textContent = projectsCount;
  });
});