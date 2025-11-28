document.addEventListener("DOMContentLoaded", () => {
  const yearsProfessionalExp = "16+";
  const yearsTechLeadershipExp = "13+";
  const developerAppCount = "47+";
  const overallProjectCount = "45+";
  const solutionsArchitectProjectCount = "15+";
  const technicalLeadProjectCount = "18+";

  document.querySelectorAll(".years-pro-exp").forEach(el => {
    el.textContent = yearsProfessionalExp;
  });

   document.querySelectorAll(".years-tl-exp").forEach(el => {
    el.textContent = yearsTechLeadershipExp;
  });

   document.querySelectorAll(".projects-dev-count").forEach(el => {
    el.textContent = developerAppCount;
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

 
});