document.addEventListener("DOMContentLoaded", () => {
  const yearsExp = "16";
  const overallProjectCount = "45+";
  const solutionsArchitectProjectCount = "~15";
  const technicalLeadProjectCount = "~18";
  const developerAppCount = "~47";

  document.querySelectorAll(".years-exp").forEach(el => {
    el.textContent = yearsExp;
  });

  document.querySelectorAll(".projects-overall-count").forEach(el => {
    el.textContent = overallProjectCount;
  });

  document.querySelectorAll(".projects-sa-count").forEach(el => {
    el.textContent = solutionsArchitectProjectCount;
  });

  document.querySelectorAll(".projects-tl-count").forEach(el => {
    el.textContent = technicalLeadProjectCount;
  });

  document.querySelectorAll(".projects-dev-count").forEach(el => {
    el.textContent = developerAppCount;
  });
});